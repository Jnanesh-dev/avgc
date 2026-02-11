-- CreateTable
CREATE TABLE "Hospital" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "reviewCount" INTEGER NOT NULL,
    "accreditations" TEXT NOT NULL,
    "specializations" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "imageUrl" TEXT,
    "priceMin" REAL NOT NULL,
    "priceMax" REAL NOT NULL,
    "currency" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,
    "hospitalId" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "qualifications" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "reviewCount" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "consultationFee" REAL,
    "currency" TEXT,
    "availableDays" TEXT NOT NULL,
    CONSTRAINT "Doctor_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Treatment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startingPrice" REAL NOT NULL,
    "currency" TEXT NOT NULL,
    "averageDuration" TEXT NOT NULL,
    "recoveryTime" TEXT NOT NULL,
    "successRate" REAL NOT NULL,
    "popularDestinations" TEXT NOT NULL,
    "imageUrl" TEXT
);

-- CreateTable
CREATE TABLE "Destination" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "costSavings" REAL NOT NULL,
    "popularTreatments" TEXT NOT NULL,
    "hospitalCount" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "flightPrice" REAL NOT NULL,
    "hotelPrice" REAL NOT NULL,
    "currency" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PatientProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profileImage" TEXT,
    "journeyProgress" INTEGER NOT NULL,
    "procedure" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "flightNotification" TEXT
);

-- CreateTable
CREATE TABLE "MedicalJourney" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "procedure" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    CONSTRAINT "MedicalJourney_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "PatientProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "JourneyStage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "journeyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "date" TEXT,
    "description" TEXT,
    CONSTRAINT "JourneyStage_journeyId_fkey" FOREIGN KEY ("journeyId") REFERENCES "MedicalJourney" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "doctorId" TEXT NOT NULL,
    "patientId" TEXT,
    "patientName" TEXT NOT NULL,
    "patientEmail" TEXT NOT NULL,
    "patientPhone" TEXT,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "consultationType" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "fee" REAL NOT NULL,
    "currency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "medicalHistory" TEXT,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Consultation_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consultation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "PatientProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DoctorAvailability" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "doctorId" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "timeSlots" TEXT NOT NULL,
    CONSTRAINT "DoctorAvailability_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Conversation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "participantIds" TEXT NOT NULL,
    "participantNames" TEXT NOT NULL,
    "unreadCount" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "conversationId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "senderName" TEXT NOT NULL,
    "senderRole" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "attachments" TEXT,
    "appointmentData" TEXT,
    CONSTRAINT "Message_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RecoveryStatus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "procedure" TEXT NOT NULL,
    "surgeryDate" TEXT NOT NULL,
    "currentDay" INTEGER NOT NULL,
    "totalDays" INTEGER NOT NULL,
    "phase" TEXT NOT NULL,
    "discharged" BOOLEAN NOT NULL,
    CONSTRAINT "RecoveryStatus_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "PatientProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VitalSigns" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "painLevel" INTEGER NOT NULL,
    "bodyTemperature" REAL NOT NULL,
    "targetTempMin" REAL NOT NULL,
    "targetTempMax" REAL NOT NULL,
    "incisionPhotoUrl" TEXT,
    CONSTRAINT "VitalSigns_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "PatientProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SymptomLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "swelling" TEXT NOT NULL,
    "painLevel" INTEGER NOT NULL,
    "redness" TEXT NOT NULL,
    "fatigue" TEXT NOT NULL,
    CONSTRAINT "SymptomLog_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "PatientProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MedicationItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "withFood" BOOLEAN,
    "frequency" TEXT,
    "timing" TEXT,
    CONSTRAINT "MedicationItem_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "PatientProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EmergencyIndicator" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "condition" TEXT NOT NULL,
    "detected" BOOLEAN NOT NULL,
    "patientId" TEXT
);

-- CreateTable
CREATE TABLE "_HospitalToTreatment" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_HospitalToTreatment_A_fkey" FOREIGN KEY ("A") REFERENCES "Hospital" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_HospitalToTreatment_B_fkey" FOREIGN KEY ("B") REFERENCES "Treatment" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_slug_key" ON "Hospital"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_slug_key" ON "Doctor"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Treatment_slug_key" ON "Treatment"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Destination_slug_key" ON "Destination"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PatientProfile_email_key" ON "PatientProfile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MedicalJourney_patientId_key" ON "MedicalJourney"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "RecoveryStatus_patientId_key" ON "RecoveryStatus"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "_HospitalToTreatment_AB_unique" ON "_HospitalToTreatment"("A", "B");

-- CreateIndex
CREATE INDEX "_HospitalToTreatment_B_index" ON "_HospitalToTreatment"("B");
