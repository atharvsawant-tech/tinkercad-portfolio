// Define LED pins
const int greenPin = 2;
const int yellowPin = 3;
const int redPin = 4;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
}

void loop() {
  // Red LED ON for 10 seconds
  digitalWrite(redPin, HIGH);
  digitalWrite(greenPin, LOW);
  digitalWrite(yellowPin, LOW);
  delay(10000); // 10 seconds

  // Green LED ON for 5 seconds
  digitalWrite(redPin, LOW);
  digitalWrite(greenPin, HIGH);
  digitalWrite(yellowPin, LOW);
  delay(5000); // 5 seconds

  // Blink Yellow LED 3 times (0.25 sec ON, 0.25 sec OFF)
  digitalWrite(greenPin, LOW);
  for (int i = 0; i < 3; i++) {
    digitalWrite(yellowPin, HIGH);
    delay(250);
    digitalWrite(yellowPin, LOW);
    delay(250);
  }
}
