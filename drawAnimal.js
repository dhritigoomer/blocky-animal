function drawAnimal() {
    var fur = [150/255, 150/255, 150/255, 1 ] // head and body
    var leg =  [56/255, 33/255, 7/255, 1];
    var faceC = leg;
    var faceFur = [59/255, 57/255, 55/255, 1];
    var horn = [0, 0, 0, 1];
    // for the eyes
    var white = [1, 1, 1, 1];
    var black = [0, 0, 0, 1];
    var snoutColor = [1, 183/255, 192/255, 1];
    var nostrils = [107/255, 48/255, 90/255, 1];
    var hoof = [26/255, 20/255, 14/255, 1];

    // Body
    var body = new Cube();
    body.color = fur;
    body.matrix.scale(.5, 0.4, 0.65);
    body.matrix.translate(-.5, -.25, -0.25);
    body.render();

    // Head
    var head = new Cube();
    head.color = fur;
    head.matrix.rotate(-HeadXAngle, 1, 0, 0);
    head.matrix.rotate(-HeadYAngle, 0, 1, 0);
    head.matrix.rotate(-HeadZAngle, 0, 0, 1);
    head.matrix.scale(0.35, 0.35, 0.35);
    head.matrix.translate(-.5, 0.25, -0.8);
    head.render();

    var face = new Cube();
    face.color = faceC;
    face.matrix.rotate(-HeadXAngle, 1, 0, 0);
    face.matrix.rotate(-HeadYAngle, 0, 1, 0);
    face.matrix.rotate(-HeadZAngle, 0, 0, 1);
    face.matrix.scale(0.30, 0.30, 0.03);
    face.matrix.translate(-.5, 0.37, -10.4);
    face.render();

    var topWool = new Cube();
    topWool.color = faceFur;
    topWool.matrix.rotate(-HeadXAngle, 1, 0, 0);
    topWool.matrix.rotate(-HeadYAngle, 0, 1, 0);
    topWool.matrix.rotate(-HeadZAngle, 0, 0, 1);
    topWool.matrix.scale(0.31, 0.071, 0.04);
    topWool.matrix.translate(-.5, 4.82, -8.1);
    topWool.render();

    var bottomLeftWool = new Cube();
    bottomLeftWool.color = faceFur;
    bottomLeftWool.matrix.rotate(-HeadXAngle, 1, 0, 0);
    bottomLeftWool.matrix.rotate(-HeadYAngle, 0, 1, 0);
    bottomLeftWool.matrix.rotate(-HeadZAngle, 0, 0, 1);
    bottomLeftWool.matrix.scale(0.05, 0.071, 0.04);
    bottomLeftWool.matrix.translate(-3.01, 1.6, -8.1);
    bottomLeftWool.render();

    var bottomRightWool = new Cube();
    bottomRightWool.color = faceFur;
    bottomRightWool.matrix.rotate(-HeadXAngle, 1, 0, 0);
    bottomRightWool.matrix.rotate(-HeadYAngle, 0, 1, 0);
    bottomRightWool.matrix.rotate(-HeadZAngle, 0, 0, 1);
    bottomRightWool.matrix.scale(0.05, 0.071, 0.04);
    bottomRightWool.matrix.translate(2.01, 1.6, -8.1);
    bottomRightWool.render();

    var leftEye = new Cube();
    leftEye.color = white;
    leftEye.matrix.rotate(-HeadXAngle, 1, 0, 0);
    leftEye.matrix.rotate(-HeadYAngle, 0, 1, 0);
    leftEye.matrix.rotate(-HeadZAngle, 0, 0, 1);
    leftEye.matrix.scale(0.1, 0.061, 0.04);
    leftEye.matrix.translate(-1.5, 3.7, -8.1);
    leftEye.render();

    var leftEyeBlack = new Cube();
    leftEyeBlack.color = black;
    leftEyeBlack.matrix.rotate(-HeadXAngle, 1, 0, 0);
    leftEyeBlack.matrix.rotate(-HeadYAngle, 0, 1, 0);
    leftEyeBlack.matrix.rotate(-HeadZAngle, 0, 0, 1);
    leftEyeBlack.matrix.scale(0.05, 0.061, 0.04);
    leftEyeBlack.matrix.translate(-3.001, 3.7, -8.15);
    leftEyeBlack.render();

    var rightEye = new Cube();
    rightEye.color = white;
    rightEye.matrix.rotate(-HeadXAngle, 1, 0, 0);
    rightEye.matrix.rotate(-HeadYAngle, 0, 1, 0);
    rightEye.matrix.rotate(-HeadZAngle, 0, 0, 1);
    rightEye.matrix.scale(0.1, 0.061, 0.04);
    rightEye.matrix.translate(0.5, 3.7, -8.1);
    rightEye.render();

    var rightEyeBlack = new Cube();
    rightEyeBlack.color = black;
    rightEyeBlack.matrix.rotate(-HeadXAngle, 1, 0, 0);
    rightEyeBlack.matrix.rotate(-HeadYAngle, 0, 1, 0);
    rightEyeBlack.matrix.rotate(-HeadZAngle, 0, 0, 1);
    rightEyeBlack.matrix.scale(0.05, 0.061, 0.04);
    rightEyeBlack.matrix.translate(2.001, 3.7, -8.15);
    rightEyeBlack.render();

    var hornR = new Cube();
    hornR.color = black;
    hornR.matrix.rotate(-HeadXAngle, 1, 0, 0);
    hornR.matrix.rotate(-HeadYAngle, 0, 1, 0);
    hornR.matrix.rotate(-HeadZAngle, 0, 0, 1);
    hornR.matrix.scale(0.02, 0.061, 0.04);
    hornR.matrix.translate(5, 7, -7.02);
    hornR.render();

    var hornL = new Cube();
    hornL.color = horn;
    hornL.matrix.rotate(-HeadXAngle, 1, 0, 0);
    hornL.matrix.rotate(-HeadYAngle, 0, 1, 0);
    hornL.matrix.rotate(-HeadZAngle, 0, 0, 1);
    hornL.matrix.scale(0.02, 0.061, 0.04);
    hornL.matrix.translate(-5, 7, -7.02);
    hornL.render();

    var snout = new Cube();
    snout.color = snoutColor;
    snout.matrix.rotate(-HeadXAngle, 1, 0, 0);
    snout.matrix.rotate(-HeadYAngle, 0, 1, 0);
    snout.matrix.rotate(-HeadZAngle, 0, 0, 1);
    snout.matrix.scale(0.14, 0.071, 0.05);
    snout.matrix.translate(-0.47, 1.6, -7.0);
    snout.render()

    var nostrilL = new Cube();
    nostrilL.color = nostrils;
    nostrilL.matrix.rotate(-HeadXAngle, 1, 0, 0);
    nostrilL.matrix.rotate(-HeadYAngle, 0, 1, 0);
    nostrilL.matrix.rotate(-HeadZAngle, 0, 0, 1);
    nostrilL.matrix.scale(0.02, 0.02, 0.05);
    nostrilL.matrix.translate(-2.0, 6.5, -7.4);
    nostrilL.render()

    var nostrilR = new Cube();
    nostrilR.color = nostrils;
    nostrilR.matrix.rotate(-HeadXAngle, 1, 0, 0);
    nostrilR.matrix.rotate(-HeadYAngle, 0, 1, 0);
    nostrilR.matrix.rotate(-HeadZAngle, 0, 0, 1);
    nostrilR.matrix.scale(0.02, 0.02, 0.05);
    nostrilR.matrix.translate(1.90, 6.5, -7.4);
    nostrilR.render()


    // Upper legs
    var frontLeft = new Cube();
    frontLeft.color = leg;
    frontLeft.matrix.setTranslate(0, 0, 0);
    frontLeft.matrix.rotate(-FrontLeftLegZAngle, 0, 0, 1);
    frontLeft.matrix.rotate(-FrontLeftLegYAngle, 0, 1, 0);
    frontLeft.matrix.rotate(-FrontLeftLegXAngle, 1, 0, 0);
    var frontLeftCoord = new Matrix4(frontLeft.matrix);
    frontLeft.matrix.scale(.20, -0.40, 0.20);
    frontLeft.matrix.translate(-1.15, .20, -0.75);
    frontLeft.render();

    var frontRight = new Cube();
    frontRight.color = leg;
    frontRight.matrix.setTranslate(0, 0, 0);
    frontRight.matrix.rotate(FrontRightLegZAngle, 0, 0, 1);
    frontRight.matrix.rotate(FrontRightLegYAngle, 0, 1, 0);
    frontRight.matrix.rotate(FrontRightLegXAngle, 1, 0, 0);
    var frontRightCoord = new Matrix4(frontRight.matrix);
    frontRight.matrix.scale(.20, -0.40, 0.20);
    frontRight.matrix.translate(.2, .2, -0.75);
    frontRight.render();

    var backLeft = new Cube();
    backLeft.color = leg;
    backLeft.matrix.setTranslate(0, 0, 0);
    backLeft.matrix.rotate(-BackLeftLegZAngle, 0, 0, 1);
    backLeft.matrix.rotate(-BackLeftLegYAngle, 0, 1, 0);
    backLeft.matrix.rotate(-BackLeftLegXAngle, 1, 0, 0);
    var backLeftCoord = new Matrix4(backLeft.matrix);
    backLeft.matrix.scale(.20, -0.66, 0.20);
    backLeft.matrix.translate(-1.15, -.3, 1.3);
    backLeft.render();

    var backRight = new Cube();
    backRight.color = leg;
    backRight.matrix.setTranslate(0, 0, 0);
    backRight.matrix.rotate(BackRightLegZAngle, 0, 0, 1);
    backRight.matrix.rotate(BackRightLegYAngle, 0, 1, 0);
    backRight.matrix.rotate(BackRightLegXAngle, 1, 0, 0);
    var backRightCoord = new Matrix4(backRight.matrix);
    backRight.matrix.scale(.20, -0.66, 0.20);
    backRight.matrix.translate(.2, -.3, 1.3);
    backRight.render();

    // Lower leg
    var frontLeftLow = new Cube();
    frontLeftLow.color = fur;
    frontLeftLow.matrix = frontLeftCoord;
    frontLeftLow.matrix.rotate(BottomFrontLeftLegZAngle, 0, 0, 1);
    frontLeftLow.matrix.rotate(BottomFrontLeftLegYAngle, 0, 1, 0);
    frontLeftLow.matrix.rotate(BottomFrontLeftLegXAngle, 1, 0, 0);
    var frontLeftLowCoord = new Matrix4(frontLeftLow.matrix);
    frontLeftLow.matrix.scale(0.16, 0.16, 0.16);
    frontLeftLow.matrix.translate(-1.25, -3.9, -.8);
    frontLeftLow.render();

    var frontRightLow = new Cube();
    frontRightLow.color = fur;
    frontRightLow.matrix = frontRightCoord;
    frontRightLow.matrix.rotate(BottomFrontRightLegZAngle, 0, 0, 1);
    frontRightLow.matrix.rotate(BottomFrontRightLegYAngle, 0, 1, 0);
    frontRightLow.matrix.rotate(BottomFrontRightLegXAngle, 1, 0, 0);
    var frontRightLowCoord = new Matrix4(frontRightLow.matrix);
    frontRightLow.matrix.scale(0.16, 0.16, 0.16);
    frontRightLow.matrix.translate(.37, -3.9, -.8);
    frontRightLow.render();

    var backLeftLow = new Cube();
    backLeftLow.color = fur;
    backLeftLow.matrix = backLeftCoord;
    backLeftLow.matrix.rotate(BottomBackLeftLegZAngle, 0, 0, 1);
    backLeftLow.matrix.rotate(BottomBackLeftLegYAngle, 0, 1, 0);
    backLeftLow.matrix.rotate(BottomBackLeftLegXAngle, 1, 0, 0);
    var backLeftLowCoord = new Matrix4(backLeftLow.matrix);
    backLeftLow.matrix.scale(0.16, 0.16, 0.16);
    backLeftLow.matrix.translate(-1.25, -3.9, 1.8);
    backLeftLow.render();

    var backRightLow = new Cube();
    backRightLow.color = fur;
    backRightLow.matrix = backRightCoord;
    backRightLow.matrix.rotate(BottomBackRightLegZAngle, 0, 0, 1);
    backRightLow.matrix.rotate(BottomBackRightLegYAngle, 0, 1, 0);
    backRightLow.matrix.rotate(BottomBackRightLegXAngle, 1, 0, 0);
    var backRightLowCoord = new Matrix4(backRightLow.matrix);
    backRightLow.matrix.scale(0.16, 0.16, 0.16);
    backRightLow.matrix.translate(.37, -3.9, 1.8);
    backRightLow.render();

    // Hoofs
    var frontLeftHoof = new Cube();
    frontLeftHoof.color = hoof;
    frontLeftHoof.matrix = frontLeftLowCoord;
    frontLeftHoof.matrix.scale(0.15, 0.05, .16);
    frontLeftHoof.matrix.translate(-1.3, -13.3, -0.81);
    frontLeftHoof.render();

    var frontRightHoof = new Cube();
    frontRightHoof.color = hoof;
    frontRightHoof.matrix = frontRightLowCoord;
    frontRightHoof.matrix.scale(0.15, 0.05, .16);
    frontRightHoof.matrix.translate(0.4, -13.3, -0.81);
    frontRightHoof.render();

    var backLeftHoof = new Cube();
    backLeftHoof.color = hoof;
    backLeftHoof.matrix = backLeftLowCoord;
    backLeftHoof.matrix.scale(0.15, 0.05, .16);
    backLeftHoof.matrix.translate(-1.3, -13.3, 1.81);
    backLeftHoof.render();

    var backRightHoof = new Cube();
    backRightHoof.color = hoof;
    backRightHoof.matrix = backRightLowCoord;
    backRightHoof.matrix.scale(0.15, 0.05, .16);
    backRightHoof.matrix.translate(0.4, -13.3, 1.81);
    backRightHoof.render();

    // Tail
    var tail_length = new Cube();
    tail_length.color = leg;
    tail_length.matrix.scale(.02, 0.3, 0.3);
    // (0.02, 0.061, 0.04)
    tail_length.matrix.translate(-.5, -.25, 0.7);
    tail_length.render();

    var tail = new Sphere();
    tail.color = hoof;
    tail.matrix.scale(0.1, 0.1, 0.1);
    tail.matrix.translate(0, -0.1, 4.5);
    tail.render();

 }
