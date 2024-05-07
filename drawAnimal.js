function drawAnimal() {
    var wool = [1, 1, 1, 1.0];
    var test = [1,0,0,1];
    var horn = [92/255,64/255,51/255,1]
    var blackwool = [0,0,0,1]
    var skin = [182/255, 151/255, 127/255, 1.0];
    var whiteWool = [0, 222/255, 218/255, 1];
    var white = [1, 1, 1, 1];
    var black = [0, 0, 0, 1];
    var snoutColor = [1, 183/255, 192/255, 1];
    var nostrils = black;
    var upperLip = [255/255, 181/255, 181/255, 1];
    var lowerLip = [218/255, 157/255, 157/255, 1];
    var hoof = [84/255, 72/255, 63/255, 1];

    // Body
    var body = new Cube();
    body.color = wool;
    body.matrix.scale(.5, 0.4, 0.65);
    body.matrix.translate(-.5, -.25, -0.25);
    body.render();

    // Head
    var head = new Cube();
    head.color = wool;
    head.matrix.rotate(-HeadXAngle, 1, 0, 0);
    head.matrix.rotate(-HeadYAngle, 0, 1, 0);
    head.matrix.rotate(-HeadZAngle, 0, 0, 1);
    head.matrix.scale(0.35, 0.35, 0.35);
    head.matrix.translate(-.5, 0.25, -0.8);
    head.render();

    var face = new Cube();
    face.color = skin;
    face.matrix.rotate(-HeadXAngle, 1, 0, 0);
    face.matrix.rotate(-HeadYAngle, 0, 1, 0);
    face.matrix.rotate(-HeadZAngle, 0, 0, 1);
    face.matrix.scale(0.30, 0.30, 0.03);
    face.matrix.translate(-.5, 0.37, -10.4);
    face.render();

    var topWool = new Cube();
    topWool.color = whiteWool;
    topWool.matrix.rotate(-HeadXAngle, 1, 0, 0);
    topWool.matrix.rotate(-HeadYAngle, 0, 1, 0);
    topWool.matrix.rotate(-HeadZAngle, 0, 0, 1);
    topWool.matrix.scale(0.31, 0.071, 0.04);
    topWool.matrix.translate(-.5, 4.82, -8.1);
    topWool.render();

    var bottomLeftWool = new Cube();
    bottomLeftWool.color = whiteWool;
    bottomLeftWool.matrix.rotate(-HeadXAngle, 1, 0, 0);
    bottomLeftWool.matrix.rotate(-HeadYAngle, 0, 1, 0);
    bottomLeftWool.matrix.rotate(-HeadZAngle, 0, 0, 1);
    bottomLeftWool.matrix.scale(0.05, 0.071, 0.04);
    bottomLeftWool.matrix.translate(-3.01, 1.6, -8.1);
    bottomLeftWool.render();

    var bottomRightWool = new Cube();
    bottomRightWool.color = whiteWool;
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
    hornR.color = horn;
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

    var mouthBottom = new Cube();
    mouthBottom.color = lowerLip;
    mouthBottom.matrix.rotate(-HeadXAngle, 1, 0, 0);
    mouthBottom.matrix.rotate(-HeadYAngle, 0, 1, 0);
    mouthBottom.matrix.rotate(-HeadZAngle, 0, 0, 1);
    mouthBottom.matrix.scale(0.1, 0.035, 0.04);
    mouthBottom.matrix.translate(-0.4701, 3.2, -8.15);
    mouthBottom.render()

    // Upper legs
    var frontLeft = new Cube();
    frontLeft.color = wool;
    frontLeft.matrix.setTranslate(0, 0, 0);
    frontLeft.matrix.rotate(-FrontLeftLegZAngle, 0, 0, 1);
    frontLeft.matrix.rotate(-FrontLeftLegYAngle, 0, 1, 0);
    frontLeft.matrix.rotate(-FrontLeftLegXAngle, 1, 0, 0);
    var frontLeftCoord = new Matrix4(frontLeft.matrix);
    frontLeft.matrix.scale(.20, -0.40, 0.20);
    frontLeft.matrix.translate(-1.15, .20, -0.75);
    frontLeft.render();

    var frontRight = new Cube();
    frontRight.color = wool;
    frontRight.matrix.setTranslate(0, 0, 0);
    frontRight.matrix.rotate(FrontRightLegZAngle, 0, 0, 1);
    frontRight.matrix.rotate(FrontRightLegYAngle, 0, 1, 0);
    frontRight.matrix.rotate(FrontRightLegXAngle, 1, 0, 0);
    var frontRightCoord = new Matrix4(frontRight.matrix);
    frontRight.matrix.scale(.20, -0.40, 0.20);
    frontRight.matrix.translate(.2, .2, -0.75);
    frontRight.render();

    var backLeft = new Cube();
    backLeft.color = blackwool;
    backLeft.matrix.setTranslate(0, 0, 0);
    backLeft.matrix.rotate(-BackLeftLegZAngle, 0, 0, 1);
    backLeft.matrix.rotate(-BackLeftLegYAngle, 0, 1, 0);
    backLeft.matrix.rotate(-BackLeftLegXAngle, 1, 0, 0);
    var backLeftCoord = new Matrix4(backLeft.matrix);
    backLeft.matrix.scale(.20, -0.66, 0.20);
    backLeft.matrix.translate(-1.15, -.3, 1.3);
    backLeft.render();

    var backRight = new Cube();
    backRight.color = wool;
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
    frontLeftLow.color = skin;
    frontLeftLow.matrix = frontLeftCoord;
    frontLeftLow.matrix.rotate(BottomFrontLeftLegZAngle, 0, 0, 1);
    frontLeftLow.matrix.rotate(BottomFrontLeftLegYAngle, 0, 1, 0);
    frontLeftLow.matrix.rotate(BottomFrontLeftLegXAngle, 1, 0, 0);
    var frontLeftLowCoord = new Matrix4(frontLeftLow.matrix);
    frontLeftLow.matrix.scale(0.16, 0.16, 0.16);
    frontLeftLow.matrix.translate(-1.25, -2.5, -.8);
    frontLeftLow.render();

    var frontRightLow = new Cube();
    frontRightLow.color = skin;
    frontRightLow.matrix = frontRightCoord;
    frontRightLow.matrix.rotate(BottomFrontRightLegZAngle, 0, 0, 1);
    frontRightLow.matrix.rotate(BottomFrontRightLegYAngle, 0, 1, 0);
    frontRightLow.matrix.rotate(BottomFrontRightLegXAngle, 1, 0, 0);
    var frontRightLowCoord = new Matrix4(frontRightLow.matrix);
    frontRightLow.matrix.scale(0.16, 0.16, 0.16);
    frontRightLow.matrix.translate(.37, -2.5, -.8);
    frontRightLow.render();

    var backLeftLow = new Cube();
    backLeftLow.color = skin;
    backLeftLow.matrix = backLeftCoord;
    backLeftLow.matrix.rotate(BottomBackLeftLegZAngle, 0, 0, 1);
    backLeftLow.matrix.rotate(BottomBackLeftLegYAngle, 0, 1, 0);
    backLeftLow.matrix.rotate(BottomBackLeftLegXAngle, 1, 0, 0);
    var backLeftLowCoord = new Matrix4(backLeftLow.matrix);
    backLeftLow.matrix.scale(0.16, 0.16, 0.16);
    backLeftLow.matrix.translate(-1.25, -2.5, 1.8);
    backLeftLow.render();

    var backRightLow = new Cube();
    backRightLow.color = skin;
    backRightLow.matrix = backRightCoord;
    backRightLow.matrix.rotate(BottomBackRightLegZAngle, 0, 0, 1);
    backRightLow.matrix.rotate(BottomBackRightLegYAngle, 0, 1, 0);
    backRightLow.matrix.rotate(BottomBackRightLegXAngle, 1, 0, 0);
    var backRightLowCoord = new Matrix4(backRightLow.matrix);
    backRightLow.matrix.scale(0.16, 0.16, 0.16);
    backRightLow.matrix.translate(.37, -2.5, 1.8);
    backRightLow.render();

    // Hoofs
    var frontLeftHoof = new Cube();
    frontLeftHoof.color = hoof;
    frontLeftHoof.matrix = frontLeftLowCoord;
    frontLeftHoof.matrix.scale(0.15, 0.05, .16);
    frontLeftHoof.matrix.translate(-1.3, -9, -0.8);
    frontLeftHoof.render();

    var frontRightHoof = new Cube();
    frontRightHoof.color = hoof;
    frontRightHoof.matrix = frontRightLowCoord;
    frontRightHoof.matrix.scale(0.15, 0.05, .16);
    frontRightHoof.matrix.translate(0.4, -9, -0.8);
    frontRightHoof.render();

    var backLeftHoof = new Cube();
    backLeftHoof.color = hoof;
    backLeftHoof.matrix = backLeftLowCoord;
    backLeftHoof.matrix.scale(0.15, 0.05, .16);
    backLeftHoof.matrix.translate(-1.3, -9, 1.8);
    backLeftHoof.render();

    var backRightHoof = new Cube();
    backRightHoof.color = hoof;
    backRightHoof.matrix = backRightLowCoord;
    backRightHoof.matrix.scale(0.15, 0.05, .16);
    backRightHoof.matrix.translate(0.4, -9, 1.8);
    backRightHoof.render();

    // Tail
    var tail = new Sphere();
    tail.color = wool;
    tail.matrix.scale(0.1, 0.1, 0.1);
    tail.matrix.translate(0, 3, 4.5);
    tail.render();

 }
