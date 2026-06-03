namespace Scribe {
    export const numerals = [
        browserEvents.One,
        browserEvents.Two,
        browserEvents.Three,
        browserEvents.Four,
        browserEvents.Five,
        browserEvents.Six,
        browserEvents.Seven,
        browserEvents.Eight,
        browserEvents.Nine,
        browserEvents.Zero
    ];

    export const letters = [
        browserEvents.A,
        browserEvents.B,
        browserEvents.C,
        browserEvents.D,
        browserEvents.E,
        browserEvents.F,
        browserEvents.G,
        browserEvents.H,
        browserEvents.I,
        browserEvents.J,
        browserEvents.K,
        browserEvents.L,
        browserEvents.M,
        browserEvents.N,
        browserEvents.O,
        browserEvents.P,
        browserEvents.Q,
        browserEvents.R,
        browserEvents.S,
        browserEvents.T,
        browserEvents.U,
        browserEvents.V,
        browserEvents.W,
        browserEvents.X,
        browserEvents.Y,
        browserEvents.Z
    ];

    export const uppercase = [
        browserEvents.LeftShift,
        browserEvents.RightShift
    ];

    export function keyButtonToString(event: browserEvents.KeyButton): string {
        switch (event) {
            case browserEvents.A: return "a";
            case browserEvents.B: return "b";
            case browserEvents.C: return "c";
            case browserEvents.D: return "d";
            case browserEvents.E: return "e";
            case browserEvents.F: return "f";
            case browserEvents.G: return "g";
            case browserEvents.H: return "h";
            case browserEvents.I: return "i";
            case browserEvents.J: return "j";
            case browserEvents.K: return "k";
            case browserEvents.L: return "l";
            case browserEvents.M: return "m";
            case browserEvents.N: return "n";
            case browserEvents.O: return "o";
            case browserEvents.P: return "p";
            case browserEvents.Q: return "q";
            case browserEvents.R: return "r";
            case browserEvents.S: return "s";
            case browserEvents.T: return "t";
            case browserEvents.U: return "u";
            case browserEvents.V: return "v";
            case browserEvents.W: return "w";
            case browserEvents.X: return "x";
            case browserEvents.Y: return "y";
            case browserEvents.Z: return "z";
            case browserEvents.Space: return " ";
        }

        switch (event) {
            case browserEvents.One: return "1";
            case browserEvents.Two: return "2";
            case browserEvents.Three: return "3";
            case browserEvents.Four: return "4";
            case browserEvents.Five: return "5";
            case browserEvents.Six: return "6";
            case browserEvents.Seven: return "7";
            case browserEvents.Eight: return "8";
            case browserEvents.Nine: return "9";
            case browserEvents.Zero: return "0";
        }

        return "";
    }

    export function addCharacter(chars: string[], event: browserEvents.KeyButton): string[] {
        let e = keyButtonToString(event);

        uppercase.forEach(value => {
            if (value.isPressed()) {
                e = e.toUpperCase();
            }
        });

        chars.push(e);

        return chars;
    }

    export function removeCharacter(chars: string[]): string[] {
        chars.removeAt(chars.length - 1);
        return chars;
    }

    game.consoleOverlay.setVisible(true, 1);

    class StringInput {
        private chars: string[] = [];
        private state: boolean;

        private refs: browserEvents.KeyButton[]; /// Lists of buttons that it can use

        public constructor() {
            this.state = false;
        }

        public start() {
            this.state = true;

            letters.forEach(event => event.onEvent(browserEvents.KeyEvent.Pressed, function () {
                if (this.state) {
                    this.chars = addCharacter(this.chars, event);
                }
            }));

            numerals.forEach(event => event.onEvent(browserEvents.KeyEvent.Pressed, function () {
                if (this.state) {
                    this.chars = addCharacter(this.chars, event);
                }
            }));

            browserEvents.Space.onEvent(browserEvents.KeyEvent.Pressed, function () {
                if (this.state) {
                    this.chars = addCharacter(this.chars, browserEvents.Space);
                }
            });

            browserEvents.RightControl.onEvent(browserEvents.KeyEvent.Pressed, function () {
                if (this.state) {
                    this.chars = removeCharacter(this.chars);
                }
            });
        }

        public close(): string {
            this.state = false;
            return this.chars.join("");
        }

        public getChars(): string[] {
            return this.chars;
        }

        public getState(): boolean {
            return this.state;
        }
    }

    let a = new StringInput();
    a.start();

    game.onUpdate(function () {
        if (a.getState()) {
            game.consoleOverlay.clear();

            let b: string[] = a.getChars();
            console.log(b.join(""));
        }
    });

}