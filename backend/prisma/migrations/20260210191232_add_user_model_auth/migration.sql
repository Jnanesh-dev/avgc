-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Doctor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
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
    CONSTRAINT "Doctor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Doctor_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Doctor" ("availableDays", "consultationFee", "currency", "experience", "hospitalId", "id", "imageUrl", "languages", "name", "qualifications", "rating", "reviewCount", "slug", "specialization") SELECT "availableDays", "consultationFee", "currency", "experience", "hospitalId", "id", "imageUrl", "languages", "name", "qualifications", "rating", "reviewCount", "slug", "specialization" FROM "Doctor";
DROP TABLE "Doctor";
ALTER TABLE "new_Doctor" RENAME TO "Doctor";
CREATE UNIQUE INDEX "Doctor_userId_key" ON "Doctor"("userId");
CREATE UNIQUE INDEX "Doctor_slug_key" ON "Doctor"("slug");
CREATE TABLE "new_PatientProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profileImage" TEXT,
    "journeyProgress" INTEGER NOT NULL,
    "procedure" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "flightNotification" TEXT,
    CONSTRAINT "PatientProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_PatientProfile" ("destination", "email", "flightNotification", "id", "journeyProgress", "name", "procedure", "profileImage") SELECT "destination", "email", "flightNotification", "id", "journeyProgress", "name", "procedure", "profileImage" FROM "PatientProfile";
DROP TABLE "PatientProfile";
ALTER TABLE "new_PatientProfile" RENAME TO "PatientProfile";
CREATE UNIQUE INDEX "PatientProfile_userId_key" ON "PatientProfile"("userId");
CREATE UNIQUE INDEX "PatientProfile_email_key" ON "PatientProfile"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
