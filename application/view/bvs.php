<div class="container">
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-body">
                    <div class="model3D">
                        <x3d id="bat_x3d">
                            <scene>
                                <inline nameSpaceName="bat" mapDEFToID="true"
                                        url="application/assets/x3d/bvs.x3d"></inline>
                            </scene>
                        </x3d>
                    </div>
                    <div class="row">
                        <button id="btnAnimate" class="btn btn-secondary model-row" type="button">Start/Stop Animation</button>
                        <button id="btnWireframe" class="btn btn-secondary model-row" type="button">Toggle Wireframe</button>
                    </div>
                    <br>
                    <div class="row">
                        <h5 class="model-row">Cameras: </h5>
                        <button id="btnCameraFront" class="btn btn-secondary model-row" type="button">Front</button>
                        <button id="btnCameraBack" class="btn btn-secondary model-row" type="button">Back</button>
                        <button id="btnCameraLeft" class="btn btn-secondary model-row" type="button">Left</button>
                        <button id="btnCameraRight" class="btn btn-secondary model-row" type="button">Right</button>
                        <button id="btnCameraTop" class="btn btn-secondary model-row" type="button">Top</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title"><?php echo $data['modelTitle'] ?></h3>
                    <p class="card-text"><?php echo $data['modelDescription'] ?></p>
                </div>
            </div>
        </div>
    </div>
</div>