function PiecePrimitive(scene, height, base, top, stacks, slices, texture, boardPosition, truePosition) {
    CGFobject.call(this, scene);
    this.scene = scene;
    this.texture = texture;

    this.slices = slices;
    this.stacks = stacks;

    this.height = height;
    this.base = base;
    this.top = top;

    //Position on the board as a x,y pair (vec2)
    this.boardPosition = boardPosition;
    //Position to be applied on the matrix (vec3)
    this.truePosition = truePostion;

    this.appearance = new CGFappearance(this.scene);
    this.appearance.setAmbient(0.8, 0.7, 0.8, 1);
    this.appearance.setDiffuse(0.2, 0.2, 0.2, 1);
    this.appearance.setSpecular(0.2, 0.2, 0.2, 1);
    this.appearance.setShininess(120);
    this.appearance.setTexture(this.texture);

    this.piece = new MyCylinder(this.scene,base, top, height, slices, stacks);

    this.initBuffers();
};

PiecePrimitive.prototype = Object.create(CGFobject.prototype);
PiecePrimitive.prototype.constructor = PiecePrimitive;

PiecePrimitive.prototype.display = function() {
    this.scene.pushMatrix();
    this.appearance.apply();
    this.scene.rotate(-Math.PI/2, 1, 0, 0);
    this.scene.translate(0, 0, -0.5);
    this.piece.display();
    this.scene.popMatrix();
}
