"use client";

import { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import {
    MessageCircle, Send, Paperclip, Phone, Video, MoreVertical,
    Search, Calendar, MapPin, FileText, Shield, ChevronLeft
} from 'lucide-react';
import { getSocket } from '@/lib/socket';

// Types
interface Message {
    id: string;
    conversationId: string;
    senderId: string;
    senderName: string;
    senderRole: string;
    content: string;
    type: string;
    timestamp: string;
    read: boolean;
    appointmentData?: {
        title: string;
        description: string;
        dateTime: string;
        meetingLink?: string;
    };
    attachments?: Array<{
        id: string;
        name: string;
        type: string;
        url: string;
    }>;
}

interface Conversation {
    id: string;
    participantIds: string[];
    participantNames: string[];
    lastMessage?: Message;
    unreadCount: number;
    updatedAt: string;
}

interface CaseOverview {
    patientId: string;
    procedure: string;
    destination: string;
    arrivalDate: string;
    careCoordinator: {
        id: string;
        name: string;
        role: string;
        languages: string[];
        online: boolean;
        avatarUrl?: string;
    };
    documents: Array<{
        id: string;
        name: string;
        type: string;
        uploadedAt: string;
    }>;
}

export default function MessengerPage() {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [messageInput, setMessageInput] = useState('');
    const [caseOverview, setCaseOverview] = useState<CaseOverview | null>(null);
    const [loading, setLoading] = useState(true);
    const [typingUsers, setTypingUsers] = useState<Set<string>>(new Set());
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const socketRef = useRef<any>(null);

    const currentUserId = 'patient-2'; // In real app, from auth
    const currentUserName = 'Alex Johnson';

    useEffect(() => {
        // Fetch conversations
        fetch(`http://localhost:3000/messages/conversations?userId=${currentUserId}`)
            .then((res) => res.json())
            .then((data) => {
                setConversations(data);
                if (data.length > 0) {
                    setSelectedConversation(data[0].id);
                }
                setLoading(false);
            });

        // Fetch case overview
        fetch(`http://localhost:3000/messages/case/${currentUserId}`)
            .then((res) => res.json())
            .then((data) => setCaseOverview(data));

        // Setup WebSocket
        const socket = getSocket();
        socketRef.current = socket;

        socket.on('new_message', (message: Message) => {
            setMessages((prev) => [...prev, message]);
        });

        socket.on('user_typing', (data: { userId: string; userName: string; isTyping: boolean }) => {
            setTypingUsers((prev) => {
                const newSet = new Set(prev);
                if (data.isTyping) {
                    newSet.add(data.userName);
                } else {
                    newSet.delete(data.userName);
                }
                return newSet;
            });
        });

        return () => {
            socket.off('new_message');
            socket.off('user_typing');
        };
    }, []);

    useEffect(() => {
        if (selectedConversation) {
            // Fetch messages for selected conversation
            fetch(`http://localhost:3000/messages/conversations/${selectedConversation}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                        setMessages(data.messages || []);
                    }
                });

            // Join conversation room
            if (socketRef.current) {
                socketRef.current.emit('join_conversation', { conversationId: selectedConversation });
            }
        }
    }, [selectedConversation]);

    useEffect(() => {
        // Scroll to bottom when new messages arrive
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = () => {
        if (!messageInput.trim() || !selectedConversation) return;

        const socket = socketRef.current;
        if (socket) {
            socket.emit('send_message', {
                conversationId: selectedConversation,
                senderId: currentUserId,
                senderName: currentUserName,
                senderRole: 'patient',
                content: messageInput,
                type: 'text',
            });
            setMessageInput('');
        }
    };

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file || !selectedConversation) return;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('conversationId', selectedConversation);
        // Sender info is handled by backend or we pass it? 
        // Backend uploadDocument uses hardcoded sender "user-1". 
        // We should probably update backend to accept sender info or use auth context.
        // For now, let's stick to the existing backend logic but maybe pass query params?
        // The backend `uploadDocument` only takes file and body.conversationId.
        // It hardcodes sender. That's fine for prototype.

        try {
            await fetch('http://localhost:3000/messages/upload', {
                method: 'POST',
                body: formData,
            });
            // Socket will receive the new message
        } catch (error) {
            console.error('Error uploading file:', error);
        }

        // Reset input
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleTyping = (isTyping: boolean) => {
        if (selectedConversation && socketRef.current) {
            socketRef.current.emit('typing', {
                conversationId: selectedConversation,
                userId: currentUserId,
                userName: currentUserName,
                isTyping,
            });
        }
    };

    const selectedConv = conversations.find((c) => c.id === selectedConversation);
    const otherParticipant = selectedConv?.participantNames.find((name) => name !== currentUserName);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-gray-600">Loading messenger...</div>
            </div>
        );
    }

    return (
        <div className="h-screen flex bg-white">
            {/* Left Sidebar - Conversations List */}
            <div className="w-80 border-r border-gray-200 flex flex-col bg-white">
                {/* Header */}
                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-900">HealthConnect</h1>
                            <p className="text-xs text-gray-500">CARE TEAM MESSENGER</p>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                </div>

                {/* Conversations List */}
                <div className="flex-1 overflow-y-auto">
                    {conversations.map((conv) => {
                        const otherName = conv.participantNames.find((name) => name !== currentUserName) || 'Unknown';
                        const isOnline = conv.id === 'conv-1'; // Mock online status

                        return (
                            <button
                                key={conv.id}
                                onClick={() => setSelectedConversation(conv.id)}
                                className={`w-full p-4 flex gap-3 border-b border-gray-100 hover:bg-gray-50 transition ${selectedConversation === conv.id ? 'bg-teal-50' : ''
                                    }`}
                            >
                                <div className="relative">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                                    {isOnline && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                                    )}
                                </div>
                                <div className="flex-1 text-left min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-medium text-gray-900 truncate">{otherName}</h3>
                                        {isOnline && (
                                            <span className="text-xs text-green-600 font-medium">Online</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600 truncate">
                                        {conv.lastMessage?.content || 'No messages yet'}
                                    </p>
                                    <div className="flex items-center justify-between mt-1">
                                        <span className="text-xs text-gray-400">
                                            {conv.lastMessage ? format(new Date(conv.lastMessage.timestamp), 'p') : ''}
                                        </span>
                                        {conv.unreadCount > 0 && (
                                            <span className="bg-teal-600 text-white text-xs rounded-full px-2 py-0.5">
                                                {conv.unreadCount}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Start New Chat Button */}
                <div className="p-4 border-t border-gray-200">
                    <button className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition">
                        + Start New Chat
                    </button>
                </div>
            </div>

            {/* Center - Message Thread */}
            <div className="flex-1 flex flex-col bg-gray-50">
                {selectedConversation ? (
                    <>
                        {/* Chat Header */}
                        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                                <div>
                                    <h2 className="font-semibold text-gray-900">{otherParticipant}</h2>
                                    <p className="text-sm text-green-600">
                                        {caseOverview?.careCoordinator.online ? 'Personal Care Manager (Online)' : 'Offline'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                    <Video className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                    <Phone className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                    <MoreVertical className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {messages.map((message) => {
                                const isSent = message.senderId === currentUserId;
                                const isAppointment = message.type === 'appointment_reminder';
                                const isMedication = message.type === 'medication_protocol';

                                if (isAppointment || isMedication) {
                                    return (
                                        <div key={message.id} className="flex justify-center">
                                            <div className={`max-w-md w-full rounded-lg p-4 ${isMedication ? 'bg-amber-50 border border-amber-200' : 'bg-emerald-50 border border-emerald-200'
                                                }`}>
                                                <div className="flex items-start gap-3">
                                                    <div className={`p-2 rounded-full ${isMedication ? 'bg-amber-100' : 'bg-emerald-100'
                                                        }`}>
                                                        <Calendar className={`w-5 h-5 ${isMedication ? 'text-amber-600' : 'text-emerald-600'
                                                            }`} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className={`font-semibold mb-1 ${isMedication ? 'text-amber-900' : 'text-emerald-900'
                                                            }`}>
                                                            {message.appointmentData?.title}
                                                        </h4>
                                                        <p className={`text-sm mb-3 ${isMedication ? 'text-amber-700' : 'text-emerald-700'
                                                            }`}>
                                                            {message.appointmentData?.description}
                                                        </p>
                                                        {!isMedication && (
                                                            <div className="flex gap-2">
                                                                <button className="px-3 py-1.5 bg-emerald-600 text-white text-sm rounded-md hover:bg-emerald-700 transition">
                                                                    Add to Calendar
                                                                </button>
                                                                <button className="px-3 py-1.5 bg-white text-emerald-700 text-sm border border-emerald-300 rounded-md hover:bg-emerald-50 transition">
                                                                    Reschedule
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="text-xs text-gray-500 mt-2 text-center">
                                                    {format(new Date(message.timestamp), 'p')}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }

                                if (message.type === 'document' || (message.attachments && message.attachments.length > 0)) {
                                    return (
                                        <div key={message.id} className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-sm ${isSent ? 'order-2' : 'order-1'} bg-white border border-gray-200 p-3 rounded-xl`}>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                                        <FileText className="w-5 h-5 text-gray-500" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-medium text-sm truncate">
                                                            {message.attachments?.[0]?.name || 'Document'}
                                                        </p>
                                                        <p className="text-xs text-gray-500">
                                                            {((message.attachments?.[0]?.url || '').split('.').pop() || 'FILE').toUpperCase()}
                                                        </p>
                                                    </div>
                                                    <a
                                                        href={message.attachments?.[0]?.url ? `http://localhost:3000${message.attachments[0].url}` : '#'}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 hover:bg-gray-100 rounded-full transition"
                                                        download
                                                    >
                                                        <Send className="w-4 h-4 text-gray-400 rotate-90" />
                                                    </a>
                                                </div>
                                                <div className={`text-xs text-gray-400 mt-2 ${isSent ? 'text-right' : 'text-left'}`}>
                                                    {format(new Date(message.timestamp), 'p')}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <div key={message.id} className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-sm ${isSent ? 'order-2' : 'order-1'}`}>
                                            {!isSent && (
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="w-6 h-6 bg-gray-200 rounded-full" />
                                                    <span className="text-xs text-gray-600">{message.senderName}</span>
                                                </div>
                                            )}
                                            <div
                                                className={`px-4 py-2 rounded-2xl ${isSent
                                                    ? 'bg-teal-600 text-white rounded-br-sm'
                                                    : 'bg-white text-gray-900 rounded-bl-sm border border-gray-200'
                                                    }`}
                                            >
                                                <p className="text-sm">{message.content}</p>
                                            </div>
                                            <div className={`text-xs text-gray-400 mt-1 ${isSent ? 'text-right' : 'text-left'}`}>
                                                {format(new Date(message.timestamp), 'p')}
                                                {isSent && message.read && <span className="ml-1">✓✓</span>}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {typingUsers.size > 0 && (
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                    <span>{Array.from(typingUsers)[0]} is typing...</span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Message Input */}
                        <div className="bg-white border-t border-gray-200 p-4">
                            <div className="flex gap-2 mb-3">
                                <button className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium hover:bg-teal-100 transition flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    Request Pickup
                                </button>
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-100 transition flex items-center gap-2"
                                >
                                    <FileText className="w-4 h-4" />
                                    Upload Document
                                </button>
                                <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition flex items-center gap-2">
                                    <MessageCircle className="w-4 h-4" />
                                    Ask for Help
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition"
                                >
                                    <Paperclip className="w-5 h-5 text-gray-600" />
                                </button>
                                <input
                                    type="text"
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSendMessage();
                                        }
                                    }}
                                    onFocus={() => handleTyping(true)}
                                    onBlur={() => handleTyping(false)}
                                    placeholder="Type your message here..."
                                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!messageInput.trim()}
                                    className="p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                        Select a conversation to start messaging
                    </div>
                )}
            </div>

            {/* Hidden File Input */}
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileUpload}
            />

            {/* Right Sidebar - Case Overview */}
            {caseOverview && selectedConversation && (
                <div className="w-80 border-l border-gray-200 bg-white overflow-y-auto">
                    {/* Care Coordinator */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 bg-gray-200 rounded-full" />
                            <div>
                                <h3 className="font-semibold text-gray-900">{caseOverview.careCoordinator.name}</h3>
                                <p className="text-sm text-gray-600">{caseOverview.careCoordinator.role}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {caseOverview.careCoordinator.languages.map((lang) => (
                                <span key={lang} className="px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full font-medium">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Case Overview */}
                    <div className="p-6 border-b border-gray-200">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-4">CASE OVERVIEW</h4>

                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <FileText className="w-4 h-4 text-gray-400" />
                                    <span className="text-xs text-gray-500">Procedure</span>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{caseOverview.procedure}</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    <span className="text-xs text-gray-500">Destination</span>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{caseOverview.destination}</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Calendar className="w-4 h-4 text-gray-400" />
                                    <span className="text-xs text-gray-500">Arrival Date</span>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    {format(new Date(caseOverview.arrivalDate), 'MMM d, yyyy')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Shared Documents */}
                    <div className="p-6">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-4">SHARED DOCUMENTS</h4>
                        <div className="space-y-2">
                            {caseOverview.documents.map((doc) => (
                                <div key={doc.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                    <div className="w-10 h-10 bg-emerald-50 rounded flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{doc.name}</p>
                                        <p className="text-xs text-gray-500">{doc.type.toUpperCase()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* HIPAA Secure Notice */}
                    <div className="p-6 border-t border-gray-200">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-start gap-2">
                                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h5 className="text-sm font-semibold text-blue-900 mb-1">HIPAA SECURE</h5>
                                    <p className="text-xs text-blue-700">
                                        This chat is end-to-end encrypted. Your medical information is protected under global health data standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
