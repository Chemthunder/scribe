namespace Scribe {
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
        switch (event) {
            case browserEvents.LeftShift: return "left_shift";
            case browserEvents.RightShift: return "right_shift";
            case browserEvents.LeftControl: return "left_control";
            case browserEvents.RightControl: return "right_control";
            case browserEvents.Alt: return "alt";
            case browserEvents.ArrowLeft: return "arrow_left";
            case browserEvents.ArrowRight: return "arrow_right";
            case browserEvents.ArrowUp: return "arrow_up";
            case browserEvents.ArrowDown: return "arrow_down";
            case browserEvents.Space: return "space";
            case browserEvents.PageUp: return "page_up";
            case browserEvents.PageDown: return "page_down";
            case browserEvents.Period: return "period";
            case browserEvents.Comma: return "comma";
            case browserEvents.ForwardSlash: return "forward_slash";
            case browserEvents.BackSlash: return "back_slash";
            case browserEvents.SemiColon: return "semicolon";
            case browserEvents.Apostrophe: return "apostrophe";
            case browserEvents.Enter: return "enter";
            case browserEvents.BackTick: return "back_tick";
            case browserEvents.Hyphen: return "hyphen";
            case browserEvents.Equals: return "equals";
            case browserEvents.End: return "end";
            case browserEvents.Home: return "home";
            case browserEvents.Delete: return "delete";
        }
        throw `[SCRIBE] Unable to parse key button ${event} to string.`;
    }

    export function mouseButtonToString(event: browserEvents.MouseButton): string {
        switch (event) {
            case browserEvents.MouseLeft: return "mouse_left";
            case browserEvents.MouseRight: return "mouse_right";
            case browserEvents.MouseWheel: return "mouse_wheel";
            case browserEvents.MouseBack: return "mouse_back";
        }
        throw `[SCRIBE] Unable to parse mouse button ${event} to string.`;
    }

    export function controllerButtonToString(event: controller.Button): string {
        switch (event) {
            case controller.A: return "a";
            case controller.B: return "b";
            case controller.left: return "left";
            case controller.right: return "right";
            case controller.up: return "up";
            case controller.down: return "down";
            case controller.menu: return "menu";
        }
        throw `[SCRIBE] Unable to parse controller button ${event} to string.`;
    }

    export function spriteFlagToString(event: SpriteFlag): string {
        switch (event) {
            case SpriteFlag.Ghost: return "Ghost";
            case SpriteFlag.AutoDestroy: return "AutoDestroy";
            case SpriteFlag.StayInScreen: return "StayInScreen";
            case SpriteFlag.DestroyOnWall: return "DestroyOnWall";
            case SpriteFlag.BounceOnWall: return "BounceOnWall";
            case SpriteFlag.ShowPhysics: return "ShowPhysics";
            case SpriteFlag.Invisible: return "Invisible";
            case SpriteFlag.RelativeToCamera: return "RelativeToCamera";
            case SpriteFlag.GhostThroughSprites: return "GhostThroughSprites";
            case SpriteFlag.GhostThroughTiles: return "GhostThroughTiles";
            case SpriteFlag.GhostThroughWalls: return "GhostThroughWalls";
        }
        throw `[SCRIBE] Unable to parse sprite flag ${event} to string`;
    }

    export function parameterize(text: string, value: any): string {
        return text.replaceAll("%", value + "");
    }
}