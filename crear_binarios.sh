ember electron:package --platform=win32 --ignore "node_modules/\.bin"
zip -qr visor-offline-windows-32bits.zip electron-builds/visor-offline-win32-ia32/
zip -qr visor-offline-windows-64bits.zip electron-builds/visor-offline-win32-x64/
