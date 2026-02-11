export interface Treatment {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  startingPrice: number;
  currency: string;
  averageDuration: string;
  recoveryTime: string;
  successRate: number;
  popularDestinations: string[];
  imageUrl?: string;
}

export interface Hospital {
  id: string;
  name: string;
  slug: string;
  country: string;
  city: string;
  address: string;
  rating: number;
  reviewCount: number;
  accreditations: string[];
  specializations: string[];
  description: string;
  features: string[];
  imageUrl?: string;
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  slug: string;
  description: string;
  costSavings: number; // percentage
  popularTreatments: string[];
  hospitalCount: number;
  imageUrl?: string;
  averageCost: {
    flightPrice: number;
    hotelPrice: number;
    currency: string;
  };
}

export interface Doctor {
  id: string;
  name: string;
  slug: string;
  specialization: string;
  hospitalId: string;
  experience: number; // years
  qualifications: string[];
  languages: string[];
  rating: number;
  reviewCount: number;
  imageUrl?: string;
  consultationFee?: number;
  currency?: string;
  availableDays?: string[]; // e.g., ['Monday', 'Wednesday', 'Friday']
}

export enum ConsultationType {
  INITIAL_ASSESSMENT = 'initial_assessment',
  FOLLOW_UP = 'follow_up',
  SECOND_OPINION = 'second_opinion',
}

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

export interface TimeSlot {
  time: string; // e.g., '09:00 AM'
  available: boolean;
}

export interface Consultation {
  id: string;
  doctorId: string;
  patientName: string;
  patientEmail: string;
  patientPhone?: string;
  date: string; // ISO date string
  time: string; // e.g., '09:00 AM'
  timezone: string; // e.g., 'GMT-5 New York, Eastern Time'
  consultationType: ConsultationType;
  duration: number; // minutes
  fee: number;
  currency: string;
  status: BookingStatus;
  platform: string; // e.g., 'Secure HD Video'
  medicalHistory?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DoctorAvailability {
  doctorId: string;
  date: string; // ISO date string
  timeSlots: TimeSlot[];
}

export enum MessageType {
  TEXT = 'text',
  APPOINTMENT_REMINDER = 'appointment_reminder',
  MEDICATION_PROTOCOL = 'medication_protocol',
  SYSTEM = 'system',
  DOCUMENT = 'document',
}

export enum UserRole {
  PATIENT = 'patient',
  CARE_MANAGER = 'care_manager',
  DOCTOR = 'doctor',
  ADMIN = 'admin',
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderRole: UserRole;
  content: string;
  type: MessageType;
  timestamp: string;
  read: boolean;
  attachments?: Array<{
    id: string;
    name: string;
    type: string;
    url: string;
  }>;
  appointmentData?: {
    title: string;
    description: string;
    dateTime: string;
    meetingLink?: string;
  };
}

export interface Conversation {
  id: string;
  participantIds: string[];
  participantNames: string[];
  lastMessage?: Message;
  unreadCount: number;
  updatedAt: string;
}

export interface CaseOverview {
  patientId: string;
  procedure: string;
  destination: string;
  arrivalDate: string;
  careCoordinator: {
    id: string;
    name: string;
    role: string;
    languages: string[];
    avatarUrl?: string;
    online: boolean;
  };
  documents: Array<{
    id: string;
    name: string;
    type: string;
    uploadedAt: string;
  }>;
}

export enum ServiceRequestType {
  PICKUP = 'pickup',
  UPLOAD_DOCUMENT = 'upload_document',
  ASK_FOR_HELP = 'ask_for_help',
}

export enum JourneyStageStatus {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in_progress',
  UPCOMING = 'upcoming',
  SCHEDULED = 'scheduled',
}

export interface JourneyStage {
  name: string;
  status: JourneyStageStatus;
  date?: string;
  description?: string;
}

export interface MedicalJourney {
  patientId: string;
  procedure: string;
  destination: string;
  stages: JourneyStage[];
}

export interface DocumentItem {
  id: string;
  name: string;
  size: string;
  type: 'pdf' | 'docx' | 'image' | 'other';
  uploadedAt?: string;
  url?: string;
}

export interface CareTeamMember {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
  online: boolean;
  languages?: string[];
}

export interface UpcomingConsultation {
  id: string;
  doctorName: string;
  doctorTitle: string;
  doctorAvatar?: string;
  procedure: string;
  scheduledFor: string;
  meetingLink?: string;
}

export interface FlightNotification {
  message: string;
  destination: string;
  status: 'pending' | 'confirmed' | 'in_progress';
}

export interface PatientProfile {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  journeyProgress: number; // 0-100
  procedure: string;
  destination: string;
  upcomingConsultation?: UpcomingConsultation;
  flightNotification?: FlightNotification;
}

export enum RecoveryPhase {
  SURGERY = 'surgery',
  MOBILITY_PHASE = 'mobility_phase',
  FULL_DISCHARGE = 'full_discharge',
}

export interface RecoveryStatus {
  patientId: string;
  procedure: string;
  surgeryDate: string;
  currentDay: number;
  totalDays: number;
  phase: RecoveryPhase;
  discharged: boolean;
}

export interface VitalSigns {
  patientId: string;
  timestamp: string;
  painLevel: number; // 1-10
  bodyTemperature: number; // Fahrenheit
  targetTempMin: number;
  targetTempMax: number;
  incisionPhotoUrl?: string;
}

export interface MedicationItem {
  id: string;
  name: string;
  dosage: string;
  time: string;
  completed: boolean;
  withFood?: boolean;
  frequency?: string;
  timing?: string;
}

export interface SymptomLog {
  id: string;
  patientId: string;
  date: string; // YYYY-MM-DD
  timestamp: string;
  swelling: 'none' | 'mild' | 'moderate' | 'high';
  painLevel: number; // 1-10
  redness: 'none' | 'mild' | 'moderate' | 'high';
  fatigue: 'none' | 'mild' | 'moderate' | 'high';
  notes?: string;
  photos?: string[];
}

export interface RecoveryTrendPoint {
  date: string;
  painScore: number;
  activityLevel: number;
}

export interface RecoveryTrends {
  patientId: string;
  period: 'week' | 'month';
  dataPoints: RecoveryTrendPoint[];
}

export interface EmergencyIndicator {
  id: string;
  condition: string;
  detected: boolean;
}
