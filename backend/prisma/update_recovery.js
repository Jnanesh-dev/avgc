
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const patientId = 'patient-2';

    console.log(`Updating recovery data for ${patientId}...`);

    // 1. Update Medical Journey to include Recovery stage (Relational Update)
    const journey = await prisma.medicalJourney.findUnique({ where: { patientId } });
    if (journey) {
        await prisma.medicalJourney.update({
            where: { patientId },
            data: {
                stages: {
                    deleteMany: {}, // Clear existing stages to avoid duplicates
                    create: [
                        { name: 'CONSULTATION', status: 'completed', date: '2026-02-01' },
                        { name: 'PRE_OP', status: 'completed', date: '2026-02-04' },
                        { name: 'SURGERY', status: 'completed', date: '2026-02-05' },
                        { name: 'RECOVERY', status: 'in_progress', description: 'Post-op recovery in Thailand' },
                    ]
                }
            }
        });
        console.log('Updated Medical Journey stages.');
    } else {
        console.log('Medical Journey not found for patient-2.');
    }

    // 2. Ensure Recovery Status exists
    const status = await prisma.recoveryStatus.findUnique({ where: { patientId } });
    if (!status) {
        await prisma.recoveryStatus.create({
            data: {
                patientId,
                procedure: 'ACL Reconstruction',
                surgeryDate: '2026-02-05',
                currentDay: 5,
                totalDays: 14,
                phase: 'MOBILITY_PHASE',
                discharged: false
            }
        });
        console.log('Created Recovery Status.');
    } else {
        console.log('Recovery Status already exists.');
    }

    // 3. Ensure Vital Signs exist
    const vitals = await prisma.vitalSigns.findFirst({ where: { patientId } });
    if (!vitals) {
        await prisma.vitalSigns.create({
            data: {
                patientId,
                painLevel: 3,
                bodyTemperature: 98.6,
                targetTempMin: 97.0,
                targetTempMax: 99.0
            }
        });
        console.log('Created Vital Signs.');
    } else {
        console.log('Vital Signs already exist.');
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
