
function openTinkercad(url){ window.open(url, "_blank", "noopener,noreferrer"); }
function openImage(src,title){ const m=document.getElementById("imagemodal"); const img=document.getElementById("largeImage"); const t=document.getElementById("imageTitle"); img.src=src; img.alt=title||"Project image"; t.textContent=title||""; m.classList.add("open"); document.body.style.overflow="hidden"; }
function closeImage(){ const m=document.getElementById("imagemodal"); m.classList.remove("open"); document.getElementById("largeImage").src=""; document.body.style.overflow=""; }

function scrollToSection(id){
  const el=document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
}
const info=[
['Smart Access & Automation System','Uses a master/slave Arduino architecture with I²C communication, keypad access control, LCD feedback, a servo-operated door, temperature/light sensing, ultrasonic distance sensing, PIR motion detection, fans, bulbs and solar tracking.',['Arduino','I²C','Keypad','LCD','Sensors','Servo']],
['Smart Obstacle-Aware Motor Control','Combines ultrasonic and PIR sensing with an L293D motor driver. Distance selects one of five speed levels; PIR detection commands reverse movement, while buttons control left and right turns.',['Arduino','L293D','Ultrasonic','PIR','PWM']],
];

// Embedded source code makes “View code” work even when index.html is opened directly
// from the downloaded ZIP using file:// (no local fetch/CORS dependency).
const codeData={
  "code/blink_leds.ino": "const int leds[] = {2, 3, 4, 5, 6}; // LED pins\nconst int numLeds = 5;\n\nvoid setup() {\n    for (int i = 0; i < numLeds; i++) {\n        pinMode(leds[i], OUTPUT);\n    }\n}\n\nvoid loop() {\n    for (int i = numLeds - 1; i >= 0; i--) { // Corrected the loop condition\n\n        // Turn ON the current LED\n        digitalWrite(leds[i], HIGH);\n\n        // Turn OFF the previous LED (which was to the right)\n        if (i < numLeds - 1) {\n            digitalWrite(leds[i + 1], LOW);\n        }\n\n        delay(1000); // Delay to control speed\n    }\n\n    // Turn OFF the first LED at the end\n    digitalWrite(leds[0], LOW);\n}\n\n",
  "code/traffic_light.ino": "// Define LED pins\nconst int greenPin = 2;\nconst int yellowPin = 3;\nconst int redPin = 4;\n\nvoid setup() {\n  pinMode(redPin, OUTPUT);\n  pinMode(greenPin, OUTPUT);\n  pinMode(yellowPin, OUTPUT);\n}\n\nvoid loop() {\n  // Red LED ON for 10 seconds\n  digitalWrite(redPin, HIGH);\n  digitalWrite(greenPin, LOW);\n  digitalWrite(yellowPin, LOW);\n  delay(10000); // 10 seconds\n\n  // Green LED ON for 5 seconds\n  digitalWrite(redPin, LOW);\n  digitalWrite(greenPin, HIGH);\n  digitalWrite(yellowPin, LOW);\n  delay(5000); // 5 seconds\n\n  // Blink Yellow LED 3 times (0.25 sec ON, 0.25 sec OFF)\n  digitalWrite(greenPin, LOW);\n  for (int i = 0; i < 3; i++) {\n    digitalWrite(yellowPin, HIGH);\n    delay(250);\n    digitalWrite(yellowPin, LOW);\n    delay(250);\n  }\n}\n",
  "code/four_bit_loop.ino": "int ledPins[] = {2, 3, 4, 5}; // LSB to MSB\n\nvoid setup() {\n  // Set all pins as output\n  for (int i = 0; i < 4; i++) {\n    pinMode(ledPins[i], OUTPUT);\n  }\n}\n\nvoid loop() {\n  for (int count = 0; count < 16; count++) { // 0 to 15\n    for (int i = 0; i < 4; i++) {\n      int bit = (count >> i) & 1;  // Extract each bit\n      digitalWrite(ledPins[i], bit);\n    }\n    delay(1000); // 1 second delay\n  }\n}\n",
  "code/manual_led.ino": "// Define LED pins\nconst int greenPin = 2;\nconst int yellowPin = 3;\nconst int redPin = 4;\n\nvoid setup() {\n  Serial.begin(9600);\n\n  // Set LED pins as output\n  pinMode(redPin, OUTPUT);\n  pinMode(greenPin, OUTPUT);\n  pinMode(yellowPin, OUTPUT);\n\n  // Start with all LEDs off\n  turnOffAll();\n  Serial.println(\"Enter R, G, or Y to turn ON the Red, Green, or Yellow LED:\");\n}\n\nvoid loop() {\n  if (Serial.available() > 0) {\n    char input = Serial.read();  // Read single character\n\n    switch (input) {\n      case 'R':\n      case 'r':\n        turnOffAll();\n        digitalWrite(redPin, HIGH);\n        Serial.println(\"Red LED ON\");\n        break;\n\n      case 'G':\n      case 'g':\n        turnOffAll();\n        digitalWrite(greenPin, HIGH);\n        Serial.println(\"Green LED ON\");\n        break;\n\n      case 'Y':\n      case 'y':\n        turnOffAll();\n        digitalWrite(yellowPin, HIGH);\n        Serial.println(\"Yellow LED ON\");\n        break;\n\n      default:\n        Serial.println(\"Invalid input! Use R, G, or Y.\");\n    }\n  }\n}\n\nvoid turnOffAll() {\n  digitalWrite(redPin, LOW);\n  digitalWrite(greenPin, LOW);\n  digitalWrite(yellowPin, LOW);\n}\n",
  "code/music_dancing_leds.ino": "// Contents of pitches.h\n#define NOTE_B0  31\n#define NOTE_C1  33\n#define NOTE_CS1 35\n#define NOTE_D1  37\n#define NOTE_DS1 39\n#define NOTE_E1  41\n#define NOTE_F1  44\n#define NOTE_FS1 46\n#define NOTE_G1  49\n#define NOTE_GS1 52\n#define NOTE_A1  55\n#define NOTE_AS1 58\n#define NOTE_B1  62\n#define NOTE_C2  65\n#define NOTE_CS2 69\n#define NOTE_D2  73\n#define NOTE_DS2 78\n#define NOTE_E2  82\n#define NOTE_F2  87\n#define NOTE_FS2 93\n#define NOTE_G2  98\n#define NOTE_GS2 104\n#define NOTE_A2  110\n#define NOTE_AS2 117\n#define NOTE_B2  123\n#define NOTE_C3  131\n#define NOTE_CS3 139\n#define NOTE_D3  147\n#define NOTE_DS3 156\n#define NOTE_E3  165\n#define NOTE_F3  175\n#define NOTE_FS3 185\n#define NOTE_G3  196\n#define NOTE_GS3 208\n#define NOTE_A3  220\n#define NOTE_AS3 233\n#define NOTE_B3  247\n#define NOTE_C4  262\n#define NOTE_CS4 277\n#define NOTE_D4  294\n#define NOTE_DS4 311\n#define NOTE_E4  330\n#define NOTE_F4  349\n#define NOTE_FS4 370\n#define NOTE_G4  392\n#define NOTE_GS4 415\n#define NOTE_A4  440\n#define NOTE_AS4 466\n#define NOTE_B4  494\n#define NOTE_C5  523\n#define NOTE_CS5 554\n#define NOTE_D5  587\n#define NOTE_DS5 622\n#define NOTE_E5  659\n#define NOTE_F5  698\n#define NOTE_FS5 740\n#define NOTE_G5  784\n#define NOTE_GS5 831\n#define NOTE_A5  880\n#define NOTE_AS5 932\n#define NOTE_B5  988\n#define NOTE_C6  1047\n#define NOTE_CS6 1109\n#define NOTE_D6  1175\n#define NOTE_DS6 1245\n#define NOTE_E6  1319\n#define NOTE_F6  1397\n#define NOTE_FS6 1480\n#define NOTE_G6  1568\n#define NOTE_GS6 1661\n#define NOTE_A6  1760\n#define NOTE_AS6 1865\n#define NOTE_B6  1976\n#define NOTE_C7  2093\n#define NOTE_CS7 2217\n#define NOTE_D7  2349\n#define NOTE_DS7 2489\n#define NOTE_E7  2637\n#define NOTE_F7  2794\n#define NOTE_FS7 2960\n#define NOTE_G7  3136\n#define NOTE_GS7 3322\n#define NOTE_A7  3520\n#define NOTE_AS7 3729\n#define NOTE_B7  3951\n#define NOTE_C8  4186\n#define NOTE_CS8 4435\n#define NOTE_D8  4699\n#define NOTE_DS8 4978\n\n\n// Notes for the \"Happy Birthday\" song\nint melody[] = {\n  NOTE_C4, NOTE_C4,\n  NOTE_D4, NOTE_C4, NOTE_F4,\n  NOTE_E4, NOTE_C4, NOTE_C4,\n  NOTE_D4, NOTE_C4, NOTE_G4,\n  NOTE_F4, NOTE_C4, NOTE_C4,\n  NOTE_C5, NOTE_A4, NOTE_F4,\n  NOTE_E4, NOTE_D4, NOTE_AS4, NOTE_AS4,\n  NOTE_A4, NOTE_F4, NOTE_G4,\n  NOTE_F4\n};\n\nint durations[] = {\n  4, 8,\n  4, 4, 4,\n  2, 4, 8,\n  4, 4, 4,\n  2, 4, 8,\n  4, 4, 4,\n  4, 4, 4, 8,\n  4, 4, 4,\n  2\n};\n\n// LED pins corresponding to each distinct note\nint ledPins[] = {2, 3, 4, 5, 6, 7, 8}; // C4, D4, E4, F4, G4, A4, AS4\n\nvoid setup() {\n  // Set LED pins as OUTPUT\n  for (int i = 0; i < 7; i++) {\n    pinMode(ledPins[i], OUTPUT);\n  }\n}\n\nvoid loop() {\n  // Play the melody\n  for (int thisNote = 0; thisNote < sizeof(melody) / sizeof(melody[0]); thisNote++) {\n    int noteDuration = 1000 / durations[thisNote]; // Calculate note duration\n    tone(10, melody[thisNote], noteDuration); // Play the note on pin 10\n\n    // Turn on the corresponding LED for the current note\n    switch (melody[thisNote]) {\n      case NOTE_C4:\n        digitalWrite(ledPins[0], HIGH);\n        break;\n      case NOTE_D4:\n        digitalWrite(ledPins[1], HIGH);\n        break;\n      case NOTE_E4:\n        digitalWrite(ledPins[2], HIGH);\n        break;\n      case NOTE_F4:\n        digitalWrite(ledPins[3], HIGH);\n        break;\n      case NOTE_G4:\n        digitalWrite(ledPins[4], HIGH);\n        break;\n      case NOTE_A4:\n        digitalWrite(ledPins[5], HIGH);\n        break;\n      case NOTE_AS4:\n        digitalWrite(ledPins[6], HIGH);\n        break;\n      default:\n        break;\n    }\n\n    delay(noteDuration); // Wait for the note duration\n    noTone(10); // Stop the tone\n\n    // Turn off all LEDs after the note duration\n    for (int i = 0; i < 7; i++) {\n      digitalWrite(ledPins[i], LOW);\n    }\n\n    // Pause between notes\n    int pauseDuration = noteDuration * 1.30; // Calculate pause duration\n    delay(pauseDuration); // Wait for the pause duration\n  }\n\n  // Delay before repeating the melody\n  delay(2000); // Wait for 2 seconds before playing again\n}\n"
};

const modal=document.getElementById('modal'),mt=document.getElementById('mt'),md=document.getElementById('md'),ms=document.getElementById('ms');
function details(i){mt.textContent=info[i][0];md.textContent=info[i][1];ms.innerHTML=info[i][2].map(x=>`<i>${x}</i>`).join('');modal.classList.add('open')}
function closeModal(){modal.classList.remove('open')}

function code(title,path){
  const t=codeData[path];
  document.getElementById('ct').textContent=title;
  document.getElementById('codebox').textContent=t || 'Source code not found.';
  const d=document.getElementById('download');
  if(t){
    const blob=new Blob([t],{type:'text/plain;charset=utf-8'});
    if(d.dataset.objectUrl) URL.revokeObjectURL(d.dataset.objectUrl);
    const url=URL.createObjectURL(blob);
    d.dataset.objectUrl=url;
    d.href=url;
    d.download=path.split('/').pop();
    d.style.display='inline-flex';
  }else{
    d.removeAttribute('href');
    d.style.display='none';
  }
  document.getElementById('codemodal').classList.add('open');
}
function closeCode(){
  document.getElementById('codemodal').classList.remove('open');
}

document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  const f=b.dataset.filter;
  document.querySelectorAll('.card').forEach(c=>c.style.display=f==='all'||c.dataset.category===f?'block':'none');
});
window.addEventListener('click',e=>{
  if(e.target===modal)closeModal();
  if(e.target===document.getElementById('codemodal'))closeCode();
});
window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeCode();closeImage()}});
