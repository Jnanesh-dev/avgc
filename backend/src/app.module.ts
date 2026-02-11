import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { HospitalsModule } from './hospitals/hospitals.module';
import { TreatmentsModule } from './treatments/treatments.module';
import { DestinationsModule } from './destinations/destinations.module';
import { ConsultationsModule } from './consultations/consultations.module';
import { MessagesModule } from './messages/messages.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RecoveryModule } from './recovery/recovery.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),
    AuthModule,
    DoctorsModule,
    HospitalsModule,
    TreatmentsModule,
    DestinationsModule,
    ConsultationsModule,
    MessagesModule,
    DashboardModule,
    RecoveryModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
