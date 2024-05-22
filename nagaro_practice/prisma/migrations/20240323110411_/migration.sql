-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "todo-name" TEXT NOT NULL,
    "task-list" TEXT[] DEFAULT ARRAY[]::TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "todo_id_key" ON "todo"("id");
