// Define LED pins
const int greenPin = 2;
const int yellowPin = 3;
const int redPin = 4;

void setup() {
  Serial.begin(9600);

  // Set LED pins as output
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);

  // Start with all LEDs off
  turnOffAll();
  Serial.println("Enter R, G, or Y to turn ON the Red, Green, or Yellow LED:");
}

void loop() {
  if (Serial.available() > 0) {
    char input = Serial.read();  // Read single character

    switch (input) {
      case 'R':
      case 'r':
        turnOffAll();
        digitalWrite(redPin, HIGH);
        Serial.println("Red LED ON");
        break;

      case 'G':
      case 'g':
        turnOffAll();
        digitalWrite(greenPin, HIGH);
        Serial.println("Green LED ON");
        break;

      case 'Y':
      case 'y':
        turnOffAll();
        digitalWrite(yellowPin, HIGH);
        Serial.println("Yellow LED ON");
        break;

      default:
        Serial.println("Invalid input! Use R, G, or Y.");
    }
  }
}

void turnOffAll() {
  digitalWrite(redPin, LOW);
  digitalWrite(greenPin, LOW);
  digitalWrite(yellowPin, LOW);
}
