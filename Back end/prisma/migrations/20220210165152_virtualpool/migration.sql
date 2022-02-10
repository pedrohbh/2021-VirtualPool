-- CreateTable
CREATE TABLE "jogador" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "vitorias" INTEGER NOT NULL,
    "derrotas" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "picture" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "partida" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "duracao" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "idPerdedor" TEXT NOT NULL,
    "idVencedor" TEXT NOT NULL
);
