-- CreateTable
CREATE TABLE "LineClient" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "lineLoginChannelName" TEXT NOT NULL,
    "lineLoginChannelId" TEXT NOT NULL,
    "lineLoginChannelSecret" TEXT NOT NULL,
    "liffId" TEXT NOT NULL,

    CONSTRAINT "LineClient_pkey" PRIMARY KEY ("id")
);
