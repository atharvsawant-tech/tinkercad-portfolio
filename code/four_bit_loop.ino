int ledPins[] = {2, 3, 4, 5}; // LSB to MSB

void setup() {
  // Set all pins as output
  for (int i = 0; i < 4; i++) {
    pinMode(ledPins[i], OUTPUT);
  }
}

void loop() {
  for (int count = 0; count < 16; count++) { // 0 to 15
    for (int i = 0; i < 4; i++) {
      int bit = (count >> i) & 1;  // Extract each bit
      digitalWrite(ledPins[i], bit);
    }
    delay(1000); // 1 second delay
  }
}
