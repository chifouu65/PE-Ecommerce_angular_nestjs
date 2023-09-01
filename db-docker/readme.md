

### docker-compose (postgres-db)

* for run db 
```bash
$ docker-compose up
```

for connect .env
    
    DATABASE_URL="postgresql://postgres:123@localhost:5432/nestjs?schema=public"


### exemple model User
[source video tuto](https://www.youtube.com/watch?v=uAKzFhE3rxU)

    model User {
    id  Int @id @default(autoincrement())
    createdAt DateTime  @default(now())
    updatedAt DateTime  @updatedAt
    
    email String @unique
    hash  String
    hasedAt String?
    
    @@map("users")
    }