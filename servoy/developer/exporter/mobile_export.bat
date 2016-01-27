@echo off
rem ## sample launch: mobile_export.bat -s servoy_sample_mobile -o D:\temp -data C:\Users\user\servoy_workspace -verbose

rem ## set path to eclipse folder. If local folder, use '.'; otherwise, use c:\path\to\eclipse
set ECLIPSEHOME=..
 
rem ## get path to equinox jar inside ECLIPSEHOME folder
for /f "delims= tokens=1" %%c in ('dir /B /S /OD %ECLIPSEHOME%\plugins\org.eclipse.equinox.launcher_*.jar') do set EQUINOXJAR=%%c

rem ## LAUNCH
java -Xms40m -Xmx512m -XX:MaxPermSize=256M -Djava.awt.headless=true -jar "%EQUINOXJAR%" -application com.servoy.eclipse.exporter.mobile.application %*