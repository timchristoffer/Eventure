# Eventure

Ett projektarbete utvecklat i React och Strapi CMS för kursen "Publiceringsverktyg och UX".

## Om projektet

Eventure är en evenemangsplattform som kombinerar React för frontend med Strapi CMS för innehållshantering på backend. Projektet ger en användarvänlig gränssnitt för att utforska och hitta information om olika evenemang.

## Funktioner

- **Evenemangsutforskning**: Bläddra bland och filtrera kommande evenemang
- **Evenemangsdetaljer**: Se detaljerad information om specifika evenemang
- **Dynamiskt innehåll**: All evenemangsdata hanteras genom Strapi CMS
- **Responsiv design**: Anpassad för både mobila enheter och desktop
- **Kategorifiltrering**: Filtrera evenemang baserat på kategorier

## Teknisk stack

- **Frontend**: React, React Router
- **Styling**: CSS
- **Backend**: Strapi CMS (Headless CMS)
- **API-kommunikation**: Fetch API
- **Bilder**: Hanteras via Strapi Media Library

## Installation och körning

### Förutsättningar

- Node.js (v14 eller senare)
- npm eller yarn
- Git

### Steg för att komma igång

1. Klona repot
   ```bash
   git clone https://github.com/timchristoffer/Eventure.git
   cd Eventure
   ```

2. Installera beroenden för både frontend och backend
   ```bash
   # Frontend
   cd client
   npm install
   
   # Backend
   cd ../server
   npm install
   ```

3. Starta utvecklingsservrarna
   ```bash
   # Starta backend (från server-mappen)
   npm run develop
   
   # I en annan terminal, starta frontend (från client-mappen)
   npm start
   ```

4. Öppna din webbläsare och gå till:
   - Frontend: http://localhost:3000
   - Strapi Admin: http://localhost:1337/admin

## Projektstruktur

```
Eventure/
├── client/                 # React-applikation
│   ├── public/             # Statiska filer
│   └── src/                # Källkod
│       ├── components/     # React-komponenter
│       ├── context/        # React Context för tillståndshantering
│       ├── images/         # Bildresurser
│       ├── pages/          # Sidkomponenter
│       ├── App.js          # Huvudapplikationskomponent
│       ├── index.js        # Applikationens startpunkt
│       └── index.css       # Globala stilar
├── server/                 # Strapi CMS
│   ├── api/                # API-definitioner
│   ├── config/             # Konfigurationsfiler
│   ├── public/             # Publika statiska filer
│   └── package.json        # Backend-beroenden
└── README.md               # Projektdokumentation
```

## Användning av Strapi

Efter installation av projektet, följ dessa steg för att börja skapa innehåll:

1. Gå till http://localhost:1337/admin
2. Skapa ett administratörskonto om du inte redan har ett
3. Logga in på Strapi admin-panelen
4. Skapa och hantera evenemang, kategorier och andra innehållstyper
5. Hantera användarroller och behörigheter vid behov

## Innehållsmodeller

Projektet använder följande huvudsakliga innehållstyper i Strapi:

- **Event**: Evenemangsdata inklusive namn, datum, beskrivning, plats, etc.
- **Category**: Kategorier för att gruppera evenemang
- **Location**: Platsinformation för evenemang

## Utvecklingsfokus

Detta projekt fokuserar på att demonstrera:
- Integration mellan headless CMS och moderna frontend-ramverk
- Användarcentrerad design för evenemangswebbplatser
- Dynamisk datahämtning och presentation
- Lösningar för innehållshantering med Strapi

## Bidragande

Om du vill bidra till projektet, vänligen följ dessa steg:

1. Forka repositoriet
2. Skapa en feature branch (`git checkout -b feature/ny-funktion`)
3. Commit dina ändringar (`git commit -m 'Lägg till ny funktion'`)
4. Push till branchen (`git push origin feature/ny-funktion`)
5. Öppna en Pull Request

## Licens

Detta projekt är licensierat under MIT-licensen.

## Erkännanden

- Tack till kursen "Publiceringsverktyg och UX" för inspiration och vägledning
- Strapi-teamet för deras utmärkta CMS
- React-communityn för alla användbara resurser

---

Utvecklat av Grupp 6, Systemutvecklare .NET klass 2023-2025, TUC Yrkeshögskola, Linköping
