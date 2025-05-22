import exec from 'child_process' ;
// import { exec } from 'child_process';


export async function clearLogcat() {
  return new Promise((resolve, reject) => {
    exec('adb logcat -c', (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

export async function checkForCrash() {
  return new Promise((resolve, reject) => {
    exec('adb logcat -d | findstr "FATAL EXCEPTION"', (err, stdout, stderr) => {
      if (err) {
        // err can be set even if no results are found, so don't reject
        resolve(false);
      } else {
        if (stdout && stdout.includes('FATAL EXCEPTION')) {
          console.log('🚨 Crash detected in logcat!');
          exec('adb logcat -d > ./logs/logcat_after_crash.txt'); // Optional: save full logs
          resolve(true);
        } else {
          resolve(false);
        }
      }
    });
  });
}
