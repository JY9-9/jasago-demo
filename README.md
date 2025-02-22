# 자사고 JaSaGo

- 자영업자 살리기 프로젝트

# 실행방법

## Repository 다운받기

```bash
git clone git@github.com:JY9-9/jasago-demo.git
```

## Docker Desktop 실행

## 데이터베이스 실행

```bash
pnpm db:up
```

## 프론트엔드 + 백앤드 동시 실행 (권장)

```bash
pnpm dev

# 이후 '데이터베이스 실행' 으로 이동
```

## 프론트엔드 실행

```bash
pnpm web dev
```

## 백엔드 실행

```bash
pnpm api dev
```

## 데이터베이스 구조 수정 후 실행

```bash
cd apps/api # 백앤드 폴더로 이동
pnpm prisma migrate dev # DB 마이그레이션 실행

# 이후 필요 시 데이터베이스 재시작
pnpm db:down
pnpm db:up

```

# 프로젝트 구조

```bash
jasago-demo/
├── apps/
│   ├── web/                 # Next.js 프론트엔드
│   └── api/                 # NestJS 백엔드
├── docker/
│   └── docker-compose.yml   # PostgreSQL 설정
├── package.json            # 워크스페이스 설정
├── pnpm-workspace.yaml     # PNPM 워크스페이스 설정
└── turbo.json             # Turborepo 설정
```

# 접속 정보

```
프론트엔드: http://localhost:3000
백엔드: http://localhost:4000
PostgreSQL: localhost:5432
pgAdmin: http://localhost:5050
Email: admin@admin.com
Password: admin
```
