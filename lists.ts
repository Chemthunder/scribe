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

    export const shift = [
        browserEvents.LeftShift,
        browserEvents.RightShift
    ];

    export const crtl = [
        browserEvents.LeftControl,
        browserEvents.RightControl
    ];

    export const mouse = [
        browserEvents.MouseLeft,
        browserEvents.MouseRight,
        browserEvents.MouseWheel,
        browserEvents.MouseBack,
        browserEvents.MouseForward
    ];

    export const controllerButtons = [
        controller.A,
        controller.B,
        controller.left,
        controller.right,
        controller.down,
        controller.up,
        controller.menu
    ];

    export const controllerMovementButtons = [
        controller.left,
        controller.right,
        controller.up,
        controller.down
    ];

    export const collisionDirections = [
        CollisionDirection.Left,
        CollisionDirection.Right,
        CollisionDirection.Top,
        CollisionDirection.Bottom
    ];

    export const spriteFlags = [
        SpriteFlag.Ghost,
        SpriteFlag.AutoDestroy,
        SpriteFlag.StayInScreen,
        SpriteFlag.DestroyOnWall,
        SpriteFlag.BounceOnWall,
        SpriteFlag.ShowPhysics,
        SpriteFlag.Invisible,
        SpriteFlag.RelativeToCamera,
        SpriteFlag.GhostThroughSprites,
        SpriteFlag.GhostThroughTiles,
        SpriteFlag.GhostThroughWalls
    ];
}