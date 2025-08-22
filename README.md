# Nullpad

**Nullpad** is a shared collaborative notepad built with Electron that allows multiple users to edit documents in real-time. It remains undetectable while sharing your screen and has been tested on Teams, Zoom, and Google Meet.
---
⚠️ This app is still experimental and may be unstable. It is intended for personal use only


## Requirements

- Node.js (v18+ recommended)  
- npm  
- macOS for building macOS apps  
- Windows for running `.exe` builds  

---
## Create Session

Visit  https://nullpad.onrender.com to create a session

## Run on Mac

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/nullpad-desktop.git
cd nullpad-desktop
```
2.	Install dependencies
```bash
npm i
```
3. Build macOS App
```bash
npm run build:mac
```

## Output
dist/Nullpad-1.0.0-arm64 → macOS installer
dist/mac-arm64/Nullpad.app → app bundle

## Install & run

Open the .dmg file, drag the app to the Applications folder, and launch it. or just run the app bundle Nullpad.app

## Run on Windows
Go to the [GitHub Releases](https://github.com/yourusername/nullpad-desktop/releases).
Download the latest .exe installer (Nullpad-Desktop.Setup.1.0.0.exe) and run it to install the app.

Or a slightly shorter alternative:

Download and run the latest Windows app (Nullpad-Desktop.exe) to launch the app.

## Join session 
Enter session ID and Passcode(if set) to join the session




----------------------------------

© 2025 Nullpad. All rights reserved.  
Built with [Electron](https://www.electronjs.org/) and [Node.js](https://nodejs.org/).
