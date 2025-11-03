-- CreateTable
CREATE TABLE "CreateRequestRide" (
    "id" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "isRideRequest" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "CreateRequestRide_pkey" PRIMARY KEY ("id")
);
