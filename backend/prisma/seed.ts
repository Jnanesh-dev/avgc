
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // --- Hospitals ---
    const hospitalData = [
        {
            id: '1',
            name: 'Bangkok International Hospital',
            slug: 'bangkok-international',
            country: 'Thailand',
            city: 'Bangkok',
            address: '2 Soi Soonvijai 7, New Petchburi Rd, Bangkok',
            rating: 4.8,
            reviewCount: 2450,
            accreditations: JSON.stringify(['JCI', 'ISO 9001', 'Thai Hospital Accreditation']),
            specializations: JSON.stringify(['Cardiology', 'Orthopedics', 'Oncology', 'Cosmetic Surgery']),
            description: 'Leading international hospital in Bangkok with state-of-the-art facilities and English-speaking medical staff.',
            features: JSON.stringify(['24/7 Emergency', 'International Patient Services', 'Airport Pickup', 'Luxury Suites']),
            imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
            priceMin: 3000,
            priceMax: 25000,
            currency: 'USD',
        },
        {
            id: '2',
            name: 'Memorial Hospital Istanbul',
            slug: 'memorial-istanbul',
            country: 'Turkey',
            city: 'Istanbul',
            address: 'Piyalepaşa Bulvarı, Şişli, Istanbul',
            rating: 4.9,
            reviewCount: 3100,
            accreditations: JSON.stringify(['JCI', 'ISO 9001', 'Turkish Ministry of Health']),
            specializations: JSON.stringify(['Cardiac Surgery', 'Hair Transplant', 'IVF', 'Dental Implants']),
            description: 'Premier medical tourism destination with world-class cardiac and cosmetic procedures.',
            features: JSON.stringify(['VIP Transfer', 'Translator Services', 'Hotel Partnerships', 'All-Inclusive Packages']),
            imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800',
            priceMin: 2500,
            priceMax: 30000,
            currency: 'USD',
        },
        {
            id: '3',
            name: 'Apollo Hospitals Chennai',
            slug: 'apollo-chennai',
            country: 'India',
            city: 'Chennai',
            address: '21, Greams Lane, Chennai, Tamil Nadu',
            rating: 4.7,
            reviewCount: 4200,
            accreditations: JSON.stringify(['JCI', 'NABH', 'ISO 9001']),
            specializations: JSON.stringify(['Organ Transplant', 'Neurosurgery', 'Oncology', 'Orthopedics']),
            description: 'India\'s most trusted multi-specialty hospital chain with cutting-edge technology and expert doctors.',
            features: JSON.stringify(['International Patient Lounge', 'Visa Assistance', 'Accommodation Support', 'Follow-up Care']),
            imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800',
            priceMin: 2000,
            priceMax: 20000,
            currency: 'USD',
        },
        {
            id: '4',
            name: 'Bumrungrad International Hospital',
            slug: 'bumrungrad-bangkok',
            country: 'Thailand',
            city: 'Bangkok',
            address: '33 Sukhumvit 3, Wattana, Bangkok',
            rating: 4.9,
            reviewCount: 5600,
            accreditations: JSON.stringify(['JCI', 'ISO 9001', 'TEMOS']),
            specializations: JSON.stringify(['Cancer Treatment', 'Heart Surgery', 'Spine Surgery', 'Wellness Programs']),
            description: 'Southeast Asia\'s largest private hospital serving over 1.1 million patients annually from 190 countries.',
            features: JSON.stringify(['Multi-lingual Staff', 'Airport Fast Track', 'Luxury Recovery Suites', 'Telemedicine']),
            imageUrl: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800',
            priceMin: 4000,
            priceMax: 35000,
            currency: 'USD',
        },
        {
            id: '5',
            name: 'Mediclinic City Hospital Dubai',
            slug: 'mediclinic-dubai',
            country: 'UAE',
            city: 'Dubai',
            address: 'Dubai Healthcare City, Dubai',
            rating: 4.8,
            reviewCount: 2800,
            accreditations: JSON.stringify(['JCI', 'CARF', 'CAP']),
            specializations: JSON.stringify(['Fertility', 'Pediatrics', 'Robotic Surgery', 'Women\'s Health']),
            description: 'Award-winning hospital in Dubai offering world-class healthcare with latest medical technologies.',
            features: JSON.stringify(['Concierge Services', 'Premium Suites', 'Multiple Dining Options', 'Prayer Rooms']),
            imageUrl: 'https://images.unsplash.com/photo-1587351021759-3e566b9af9ef?w=800',
            priceMin: 5000,
            priceMax: 40000,
            currency: 'USD',
        },
        {
            id: '6',
            name: 'Quirónsalud Madrid',
            slug: 'quironsalud-madrid',
            country: 'Spain',
            city: 'Madrid',
            address: 'Calle Diego de Velázquez, Pozuelo de Alarcón, Madrid',
            rating: 4.7,
            reviewCount: 1900,
            accreditations: JSON.stringify(['JCI', 'ISO 9001', 'European Quality Standards']),
            specializations: JSON.stringify(['Oncology', 'IVF', 'Neurosurgery', 'Bariatric Surgery']),
            description: 'Spain\'s leading private hospital group providing comprehensive healthcare services.',
            features: JSON.stringify(['EU Standards', 'Patient Coordinators', 'Tourism Packages', 'Recovery Hotels']),
            imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
            priceMin: 3500,
            priceMax: 28000,
            currency: 'USD',
        },
    ];

    for (const hospital of hospitalData) {
        await prisma.hospital.upsert({
            where: { id: hospital.id },
            update: {},
            create: hospital,
        });
    }

    // --- Doctors ---
    const doctorData = [
        {
            id: '1',
            name: 'Dr. Somchai Pattanapong',
            slug: 'dr-somchai-pattanapong',
            specialization: 'Orthopedic Surgery',
            hospitalId: '1',
            experience: 18,
            qualifications: JSON.stringify(['MD', 'FICS', 'Board Certified Orthopedic Surgeon']),
            languages: JSON.stringify(['English', 'Thai', 'Japanese']),
            rating: 4.9,
            reviewCount: 420,
            imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
            consultationFee: 150,
            currency: 'USD',
            availableDays: JSON.stringify(['Monday', 'Wednesday', 'Friday']),
        },
        {
            id: '2',
            name: 'Dr. Mehmet Yilmaz',
            slug: 'dr-mehmet-yilmaz',
            specialization: 'Cardiac Surgery',
            hospitalId: '2',
            experience: 22,
            qualifications: JSON.stringify(['MD', 'PhD', 'FETCS', 'Board Certified Cardiac Surgeon']),
            languages: JSON.stringify(['English', 'Turkish', 'German', 'Arabic']),
            rating: 4.8,
            reviewCount: 580,
            imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400',
            consultationFee: 200,
            currency: 'USD',
            availableDays: JSON.stringify(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']),
        },
        {
            id: '3',
            name: 'Dr. Priya Sharma',
            slug: 'dr-priya-sharma',
            specialization: 'Fertility & IVF',
            hospitalId: '3',
            experience: 15,
            qualifications: JSON.stringify(['MBBS', 'MD', 'Fellowship in Reproductive Medicine']),
            languages: JSON.stringify(['English', 'Hindi', 'Tamil']),
            rating: 4.9,
            reviewCount: 650,
            imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
            consultationFee: 120,
            currency: 'USD',
            availableDays: JSON.stringify(['Tuesday', 'Wednesday', 'Thursday', 'Saturday']),
        },
        {
            id: '4',
            name: 'Dr. Somporn Thanakit',
            slug: 'dr-somporn-thanakit',
            specialization: 'Cosmetic Surgery',
            hospitalId: '4',
            experience: 20,
            qualifications: JSON.stringify(['MD', 'Board Certified Plastic Surgeon', 'ISAPS Member']),
            languages: JSON.stringify(['English', 'Thai', 'Chinese', 'Korean']),
            rating: 4.7,
            reviewCount: 890,
            imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
            consultationFee: 175,
            currency: 'USD',
            availableDays: JSON.stringify(['Monday', 'Wednesday', 'Friday', 'Saturday']),
        },
        {
            id: '5',
            name: 'Dr. Ahmed Al-Mansouri',
            slug: 'dr-ahmed-al-mansouri',
            specialization: 'Ophthalmology',
            hospitalId: '5',
            experience: 16,
            qualifications: JSON.stringify(['MBBS', 'FRCS', 'Fellowship in LASIK Surgery']),
            languages: JSON.stringify(['English', 'Arabic', 'Urdu']),
            rating: 4.8,
            reviewCount: 340,
            imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400',
            consultationFee: 130,
            currency: 'USD',
            availableDays: JSON.stringify(['Monday', 'Tuesday', 'Thursday', 'Friday']),
        },
        {
            id: '6',
            name: 'Dr. Carmen Rodriguez',
            slug: 'dr-carmen-rodriguez',
            specialization: 'Oncology',
            hospitalId: '6',
            experience: 19,
            qualifications: JSON.stringify(['MD', 'PhD', 'European Board Certified Oncologist']),
            languages: JSON.stringify(['English', 'Spanish', 'French']),
            rating: 4.9,
            reviewCount: 410,
            imageUrl: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400',
            consultationFee: 180,
            currency: 'USD',
            availableDays: JSON.stringify(['Tuesday', 'Wednesday', 'Thursday', 'Friday']),
        },
    ];

    for (const doctor of doctorData) {
        await prisma.doctor.upsert({
            where: { id: doctor.id },
            update: {},
            create: doctor,
        });
    }

    // --- Treatments ---
    const treatmentData = [
        {
            id: '1',
            name: 'Knee Replacement',
            slug: 'knee-replacement',
            category: 'Orthopedic',
            description: 'Complete knee joint replacement surgery with modern implants and minimally invasive techniques.',
            startingPrice: 4500,
            currency: 'USD',
            averageDuration: '2-3 hours',
            recoveryTime: '6-12 weeks',
            successRate: 95,
            popularDestinations: JSON.stringify(['Thailand', 'Turkey', 'India']),
            imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800',
        },
        {
            id: '2',
            name: 'Heart Surgery',
            slug: 'heart-surgery',
            category: 'Cardiac',
            description: 'Advanced cardiac procedures including bypass surgery and valve replacement by experienced surgeons.',
            startingPrice: 12000,
            currency: 'USD',
            averageDuration: '4-6 hours',
            recoveryTime: '8-12 weeks',
            successRate: 92,
            popularDestinations: JSON.stringify(['Singapore', 'Turkey', 'India']),
            imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800',
        },
        {
            id: '3',
            name: 'IVF & Fertility',
            slug: 'ivf-fertility',
            category: 'Fertility',
            description: 'Comprehensive fertility treatments including IVF, ICSI, and egg freezing with high success rates.',
            startingPrice: 3200,
            currency: 'USD',
            averageDuration: '2-3 weeks',
            recoveryTime: '1-2 weeks',
            successRate: 65,
            popularDestinations: JSON.stringify(['Spain', 'Czech Republic', 'Greece']),
            imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800',
        },
        {
            id: '4',
            name: 'Dental Implants',
            slug: 'dental-implants',
            category: 'Dental',
            description: 'Premium dental implants with titanium posts and ceramic crowns for natural-looking results.',
            startingPrice: 1200,
            currency: 'USD',
            averageDuration: '3-6 months',
            recoveryTime: '2-4 weeks',
            successRate: 98,
            popularDestinations: JSON.stringify(['Mexico', 'Turkey', 'Hungary']),
            imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
        },
        {
            id: '5',
            name: 'Cosmetic Surgery',
            slug: 'cosmetic-surgery',
            category: 'Cosmetic',
            description: 'Wide range of cosmetic procedures including rhinoplasty, liposuction, and breast augmentation.',
            startingPrice: 2500,
            currency: 'USD',
            averageDuration: '2-4 hours',
            recoveryTime: '4-8 weeks',
            successRate: 94,
            popularDestinations: JSON.stringify(['South Korea', 'Brazil', 'Turkey']),
            imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
        },
        {
            id: '6',
            name: 'Eye Surgery (LASIK)',
            slug: 'lasik-eye-surgery',
            category: 'Ophthalmology',
            description: 'Advanced LASIK and PRK laser eye surgery for vision correction with latest technology.',
            startingPrice: 1500,
            currency: 'USD',
            averageDuration: '15-30 minutes per eye',
            recoveryTime: '1-2 weeks',
            successRate: 96,
            popularDestinations: JSON.stringify(['Turkey', 'Singapore', 'India']),
            imageUrl: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800',
        },
    ];

    for (const treatment of treatmentData) {
        await prisma.treatment.upsert({
            where: { id: treatment.id },
            update: {},
            create: treatment,
        });
    }

    // --- Destinations ---
    const destinationData = [
        {
            id: '1',
            name: 'Bangkok',
            country: 'Thailand',
            slug: 'bangkok-thailand',
            description: 'Southeast Asia\'s medical tourism hub with world-class hospitals, affordable prices, and excellent post-op care facilities.',
            costSavings: 75,
            popularTreatments: JSON.stringify(['Knee Replacement', 'Cosmetic Surgery', 'Dental Implants', 'IVF']),
            hospitalCount: 45,
            imageUrl: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800',
            flightPrice: 800,
            hotelPrice: 50,
            currency: 'USD',
        },
        {
            id: '2',
            name: 'Istanbul',
            country: 'Turkey',
            slug: 'istanbul-turkey',
            description: 'Gateway between Europe and Asia offering premium medical care at competitive prices with rich cultural experiences.',
            costSavings: 70,
            popularTreatments: JSON.stringify(['Hair Transplant', 'Eye Surgery', 'Dental Implants', 'Cosmetic Surgery']),
            hospitalCount: 38,
            imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800',
            flightPrice: 600,
            hotelPrice: 60,
            currency: 'USD',
        },
        {
            id: '3',
            name: 'Chennai',
            country: 'India',
            slug: 'chennai-india',
            description: 'India\'s top medical destination known for complex surgeries, organ transplants, and exceptional value for money.',
            costSavings: 80,
            popularTreatments: JSON.stringify(['Heart Surgery', 'Organ Transplant', 'Knee Replacement', 'Eye Surgery']),
            hospitalCount: 52,
            imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
            flightPrice: 900,
            hotelPrice: 40,
            currency: 'USD',
        },
        {
            id: '4',
            name: 'Dubai',
            country: 'UAE',
            slug: 'dubai-uae',
            description: 'Luxury medical tourism destination with cutting-edge technology, premium facilities, and multilingual staff.',
            costSavings: 50,
            popularTreatments: JSON.stringify(['IVF', 'Cosmetic Surgery', 'Dental Implants', 'Wellness Programs']),
            hospitalCount: 28,
            imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
            flightPrice: 700,
            hotelPrice: 120,
            currency: 'USD',
        },
        {
            id: '5',
            name: 'Mexico City',
            country: 'Mexico',
            slug: 'mexico-city-mexico',
            description: 'North America\'s premier destination for affordable dental and cosmetic procedures with easy access for US patients.',
            costSavings: 65,
            popularTreatments: JSON.stringify(['Dental Implants', 'Cosmetic Surgery', 'Bariatric Surgery', 'IVF']),
            hospitalCount: 34,
            imageUrl: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=800',
            flightPrice: 400,
            hotelPrice: 45,
            currency: 'USD',
        },
    ];

    for (const destination of destinationData) {
        await prisma.destination.upsert({
            where: { id: destination.id },
            update: {},
            create: destination,
        });
    }

    // --- Patient Profiles ---
    const patient1 = {
        id: 'patient-1',
        name: 'Sarah Miller',
        email: 'sarah.miller@email.com',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
        journeyProgress: 45,
        procedure: 'Knee Arthroplasty',
        destination: 'Switzerland',
        flightNotification: JSON.stringify({
            message: 'Your flight details are being finalized',
            destination: 'Zurich',
            status: 'in_progress',
        }),
        documents: {
            create: [
                { name: 'Flight Itinerary.pdf', size: '2.4 MB', type: 'application/pdf', uploadedAt: new Date('2026-02-09T10:00:00Z'), url: '#' },
                { name: 'Medical Clearance.pdf', size: '1.2 MB', type: 'application/pdf', uploadedAt: new Date('2026-02-08T14:30:00Z'), url: '#' },
                { name: 'Pre-op Instructions.pdf', size: '850 KB', type: 'application/pdf', uploadedAt: new Date('2026-02-05T09:15:00Z'), url: '#' },
            ]
        },
        careTeam: {
            create: [
                { name: 'Dr. Sarah Jenkins', role: 'Care Manager', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200', online: true, languages: JSON.stringify(['English', 'German']) },
                { name: 'Dr. Somchai', role: 'Surgeon', avatarUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200', online: false, languages: JSON.stringify(['English', 'Thai']) },
            ]
        }
    };

    const patient2 = {
        id: 'patient-2',
        name: 'Alex Johnson',
        email: 'alex.johnson@email.com',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
        journeyProgress: 85,
        procedure: 'ACL Reconstruction',
        destination: 'Thailand',
    };

    await prisma.patientProfile.upsert({
        where: { id: patient1.id },
        update: {},
        create: patient1,
    });

    await prisma.patientProfile.upsert({
        where: { id: patient2.id },
        update: {},
        create: patient2,
    });

    // --- Medical Journey (Patient 2) ---
    const journey2 = {
        patientId: 'patient-2',
        procedure: 'ACL Reconstruction',
        destination: 'Thailand',
        stages: {
            create: [
                { name: 'PRE-SCREENING', status: 'completed', date: 'Completed Jan 5' },
                { name: 'CONSULTATION', status: 'completed', date: 'Completed Jan 20' },
                { name: 'TRAVEL PREP', status: 'completed', date: 'Completed Feb 1' },
                { name: 'PROCEDURE', status: 'completed', date: 'Completed Feb 5' },
                { name: 'RECOVERY', status: 'in_progress', description: 'Day 5 of 14' },
            ]
        }
    };
    // Upsert logic for complex relation? Just create if patient exists
    const existingJourney = await prisma.medicalJourney.findUnique({ where: { patientId: 'patient-2' } });
    if (!existingJourney) {
        await prisma.medicalJourney.create({ data: journey2 });
    }

    // --- Recovery Status (Patient 2) ---
    const recoveryStatus = {
        patientId: 'patient-2',
        procedure: 'ACL Reconstruction',
        surgeryDate: '2026-02-05',
        currentDay: 5,
        totalDays: 14,
        phase: 'mobility_phase',
        discharged: false,
    };
    await prisma.recoveryStatus.upsert({
        where: { patientId: 'patient-2' },
        update: {},
        create: recoveryStatus,
    });

    // --- Vital Signs (Patient 2) ---
    await prisma.vitalSigns.create({
        data: {
            patientId: 'patient-2',
            timestamp: new Date(),
            painLevel: 4,
            bodyTemperature: 98.6,
            targetTempMin: 97.0,
            targetTempMax: 99.5,
        }
    });

    // --- Medications (Patient 2) ---
    const medications = [
        { id: 'med-1', patientId: 'patient-2', name: 'Ibuprofen', dosage: '400mg', time: '08:00 AM', completed: true, withFood: true },
        { id: 'med-2', patientId: 'patient-2', name: 'Antibiotics', dosage: 'Amoxicillin', time: '02:00 PM', completed: false, frequency: 'Every 12 hours' },
        { id: 'med-3', patientId: 'patient-2', name: 'Sleep Aid', dosage: 'Melatonin', time: '10:00 PM', completed: false, timing: 'Before bed' },
    ];
    for (const med of medications) {
        await prisma.medicationItem.upsert({
            where: { id: med.id }, // Need ID in schema? Yes
            update: {},
            create: med
        });
    }

    // --- Conversations ---
    const conversations = [
        {
            id: 'conv-1',
            participantIds: JSON.stringify(['user-1', 'user-2']),
            participantNames: JSON.stringify(['Alex Thompson', 'Sarah Jenkins']),
            unreadCount: 2,
            updatedAt: new Date('2026-02-10T15:26:00Z'),
        },
    ];

    for (const conv of conversations) {
        await prisma.conversation.upsert({
            where: { id: conv.id },
            update: {},
            create: conv
        });
    }

    // --- Messages ---
    const messages = [
        {
            id: '1',
            conversationId: 'conv-1',
            senderId: 'user-2',
            senderName: 'Sarah Jenkins',
            senderRole: 'care_manager',
            content: 'Hello Alex! I\'ve confirmed your airport pickup from Bangkok Suvarnabhumi Airport.',
            type: 'text',
            timestamp: new Date('2026-02-10T10:18:00Z'),
            read: true,
        },
        {
            id: '4', // skipping system messages for brevity in seed, or adding later
            conversationId: 'conv-1',
            senderId: 'user-1',
            senderName: 'Alex Thompson',
            senderRole: 'patient',
            content: 'That\'s great news, thank you Sarah.',
            type: 'text',
            timestamp: new Date('2026-02-10T15:25:00Z'),
            read: false,
        }
    ];

    for (const msg of messages) {
        await prisma.message.upsert({
            where: { id: msg.id },
            update: {},
            create: msg
        });
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
