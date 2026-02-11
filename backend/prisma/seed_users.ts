
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting User seeding...');

    // Seed Patients
    const patients = await prisma.patientProfile.findMany();
    for (const p of patients) {
        const existingUser = await prisma.user.findUnique({ where: { email: p.email } });
        if (!existingUser) {
            const hashedPassword = await bcrypt.hash('password123', 10);
            const user = await prisma.user.create({
                data: {
                    email: p.email,
                    password: hashedPassword,
                    name: p.name,
                    role: 'patient',
                    patientProfile: {
                        connect: { id: p.id }
                    }
                }
            });
            console.log(`Created user for patient: ${p.name} (${user.email})`);
        } else {
            // Link if not linked
            if (!p.userId) {
                await prisma.patientProfile.update({
                    where: { id: p.id },
                    data: { userId: existingUser.id }
                });
                console.log(`Linked existing user to patient: ${p.name}`);
            }
        }
    }

    // Seed Doctors
    const doctors = await prisma.doctor.findMany();
    for (const d of doctors) {
        const email = `${d.slug}@astraveda.com`; // Generate email
        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (!existingUser) {
            const hashedPassword = await bcrypt.hash('doctor123', 10);
            const user = await prisma.user.create({
                data: {
                    email: email,
                    password: hashedPassword,
                    name: d.name,
                    role: 'doctor',
                    doctorProfile: {
                        connect: { id: d.id }
                    }
                }
            });
            console.log(`Created user for doctor: ${d.name} (${user.email})`);
        } else {
            if (!d.userId) {
                await prisma.doctor.update({
                    where: { id: d.id },
                    data: { userId: existingUser.id }
                });
                console.log(`Linked existing user to doctor: ${d.name}`);
            }
        }
    }

    // Create Admin User
    const adminEmail = 'admin@astraveda.com';
    const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await prisma.user.create({
            data: {
                email: adminEmail,
                password: hashedPassword,
                name: 'Admin User',
                role: 'admin',
            }
        });
        console.log(`Created admin user: ${adminEmail}`);
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
