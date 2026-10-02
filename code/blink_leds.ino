const int leds[] = {2, 3, 4, 5, 6}; // LED pins
const int numLeds = 5;

void setup() {
    for (int i = 0; i < numLeds; i++) {
        pinMode(leds[i], OUTPUT);
    }
}

void loop() {
    for (int i = numLeds - 1; i >= 0; i--) { // Corrected the loop condition

        // Turn ON the current LED
        digitalWrite(leds[i], HIGH);

        // Turn OFF the previous LED (which was to the right)
        if (i < numLeds - 1) {
            digitalWrite(leds[i + 1], LOW);
        }

        delay(1000); // Delay to control speed
    }

    // Turn OFF the first LED at the end
    digitalWrite(leds[0], LOW);
}

