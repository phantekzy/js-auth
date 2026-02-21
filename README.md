# Full-Stack Authentifizierungs-System
Node.js, PostgreSQL und React (TypeScript)

Eine sichere Authentifizierungs-Plattform bestehend aus einer Node.js REST API und einem React Frontend. 
Dieses Projekt demonstriert die Benutzerregistrierung, den Login sowie das Handling geschützter Routen mittels JSON Web Tokens (JWT).

---

## Übersicht

Das System ist in zwei primäre Service-Layer unterteilt, um eine klare Trennung der Zuständigkeiten (Separation of Concerns) zwischen Backend-Logik und Frontend-Statusverwaltung zu gewährleisten.

---

## Architektur

### Backend (Node.js & Express)

Die Backend-Schicht übernimmt die Authentifizierung und die Datenverwaltung.

- Verarbeitet Benutzerregistrierung und Login
- Verbindung zu PostgreSQL mittels Connection Pooling
- Erstellung und Verifizierung von JSON Web Tokens (JWT)
- Passwort-Hashing mit Bcrypt
- Schutz privater Endpunkte durch Middleware

### Frontend (React & TypeScript)

Die Frontend-Schicht verwaltet den Authentifizierungs-Status und das clientseitige Routing.

- Globaler Auth-Status über die React Context API (AuthProvider)
- Routenschutz durch einen ProtectedRoute-Wrapper
- Abstraktion der API-Kommunikation
- Responsives UI, gestaltet mit Tailwind CSS

---

## Verzeichnisstruktur

```text
.
├── backend/
│   ├── src/
│   │   ├── config/         # Datenbank-Konfiguration
│   │   ├── controllers/    # Authentifizierungs-Logik
│   │   ├── middleware/     # JWT-Verifizierungs-Middleware
│   │   ├── routes/         # API-Endpunkt-Definitionen
│   │   └── index.js        # App-Einstiegspunkt
│   └── .env                # Umgebungsvariablen
│
└── frontend/
    ├── src/
    │   ├── components/     # Wiederverwendbare UI-Komponenten
    │   ├── context/        # Auth-Kontext-Logik
    │   ├── layouts/        # Routen-Wrapper und Guards
    │   ├── pages/          # Anwendungs-Views (Seiten)
    │   ├── App.tsx         # Routing-Konfiguration
    │   ├── main.tsx        # React-Einstiegspunkt
    │   └── .env            # Umgebungsvariablen
```

---

## Technology Stack

| Ebene      | Technologie               |
|------------|---------------------------|
| Runtime    | Node.js                   |
| Backend    | Express.js                |
| Frontend   | React 18                  |
| Sprache    | JavaScript / TypeScript   |
| Datenbank  | PostgreSQL                |
| Styling    | Tailwind CSS              |
| Sicherheit | JWT, Bcrypt               |

---

## Installation und Setup

### Backend

cd backend
npm install

# Erstelle eine .env Datei im backend Ordner:
# PORT=5000
# DATABASE_URL=dein_postgres_connection_string
# JWT_SECRET=dein_geheimschlüssel

# Server starten:
node src/index.js

---

### Frontend

cd frontend
npm install

# Erstelle eine .env Datei im frontend Ordner:
# VITE_API_URL=http://localhost:5000

# Anwendung starten:
npm run dev

---

## Sicherheits-Features

- Bcrypt: Sicheres Passwort-Hashing vor dem Speichern in der Datenbank.
- JWT: Stateless-Authentifizierung für sichere API-Abfragen.
- Middleware: Schutz von Backend-Routen vor unbefugtem Zugriff.
- Protected Routes: Clientseitige Zugriffskontrolle für geschützte Seiten.
- Environment Variables: Schutz sensibler Daten durch .env Dateien.
