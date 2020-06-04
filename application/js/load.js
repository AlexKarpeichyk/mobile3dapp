const loadContents = () => {
    $('#mainContent').empty();
    $('#mainContent').html(`<div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div id="main_text">
                        <h2>The batarang.</h2>
                        <p>Explore interactive 3D models of different iterations of the most iconic weapon used by the Caped
                            Crusader.</p>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <img class="card-img-top img-fluid img-thumbnail" src="application/assets/thumbnails/arkham.jpg"
                             alt="Arkham">
                        <div class="card-body">
                            <h3 class="card-title">Arkham</h3>
                            <button id="arkham" class="btn btn-primary">Explore...</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <img class="card-img-top img-fluid img-thumbnail" src="application/assets/thumbnails/knight.jpg"
                             alt="Knight">
                        <div class="card-body">
                            <h3 class="card-title">The Dark Knight</h3>
                            <button id="knight" class="btn btn-primary">Explore...</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <img class="card-img-top img-fluid img-thumbnail" src="application/assets/thumbnails/bvs.jpg" alt="BvS">
                        <div class="card-body">
                            <h3 class="card-title">BvS</h3>
                            <button id="bvs" class="btn btn-primary">Explore...</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <img class="card-img-top img-fluid img-thumbnail" src="application/assets/thumbnails/custom.jpg" alt="Custom">
                        <div class="card-body">
                            <h3 class="card-title">Custom</h3>
                            <button id="custom" class="btn btn-primary">Explore...</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`);

    $('#arkham, #arkham_').on('click', () => {
        $.ajax('http://users.sussex.ac.uk/~ak581/3dapp/assignment/index.php/arkham').then(data => {
            $('#mainContent').empty();
            $('#mainContent').html(data);

            $('#btnCameraFront').on('click', () => {
                $('#bat__Front').attr('set_bind', 'true');
            });
            $('#btnCameraBack').on('click', () => {
                $('#bat__Back').attr('set_bind', 'true');
            });
            $('#btnCameraRight').on('click', () => {
                $('#bat__Right').attr('set_bind', 'true');
            });
            $('#btnCameraLeft').on('click', () => {
                $('#bat__Left').attr('set_bind', 'true');
            });
            $('#btnCameraTop').on('click', () => {
                $('#bat__Top').attr('set_bind', 'true');
            });

            // Wireframes
            $('#btnWireframe').on('click', () => {
                document.getElementById('bat_x3d').runtime.togglePoints(true);
            });

            // Trigger animation
            $('#btnAnimate').on('click', () => {
                if ($('#bat__BatRotate').attr('enabled') === 'false') {
                    $('#bat__BatRotate').attr('enabled', 'true');
                } else {
                    $('#bat__BatRotate').attr('enabled', 'false');
                }
            });

            x3dom.reload();
        })
    }) 

    $('#knight, #knight_').on('click', () => {
        $.ajax('http://users.sussex.ac.uk/~ak581/3dapp/assignment/index.php/knight').then(data => {
            $('#mainContent').empty();
            $('#mainContent').html(data);

            $('#btnCameraFront').on('click', () => {
                $('#bat__Front').attr('set_bind', 'true');
            });
            $('#btnCameraBack').on('click', () => {
                $('#bat__Back').attr('set_bind', 'true');
            });
            $('#btnCameraRight').on('click', () => {
                $('#bat__Right').attr('set_bind', 'true');
            });
            $('#btnCameraLeft').on('click', () => {
                $('#bat__Left').attr('set_bind', 'true');
            });
            $('#btnCameraTop').on('click', () => {
                $('#bat__Top').attr('set_bind', 'true');
            });

            // Wireframes
            $('#btnWireframe').on('click', () => {
                document.getElementById('bat_x3d').runtime.togglePoints(true);
            });

            // Trigger animation
            $('#btnAnimate').on('click', () => {
                if ($('#bat__BatRotate').attr('enabled') === 'false') {
                    $('#bat__BatRotate').attr('enabled', 'true');
                } else {
                    $('#bat__BatRotate').attr('enabled', 'false');
                }
            });

            x3dom.reload();
        })
    })

    $('#custom, #custom_').on('click', () => {
        $.ajax('http://users.sussex.ac.uk/~ak581/3dapp/assignment/index.php/custom').then(data => {
            $('#mainContent').empty();
            $('#mainContent').html(data);

            $('#btnCameraFront').on('click', () => {
                $('#bat__Front').attr('set_bind', 'true');
            });
            $('#btnCameraBack').on('click', () => {
                $('#bat__Back').attr('set_bind', 'true');
            });
            $('#btnCameraRight').on('click', () => {
                $('#bat__Right').attr('set_bind', 'true');
            });
            $('#btnCameraLeft').on('click', () => {
                $('#bat__Left').attr('set_bind', 'true');
            });
            $('#btnCameraTop').on('click', () => {
                $('#bat__Top').attr('set_bind', 'true');
            });

            // Wireframes
            $('#btnWireframe').on('click', () => {
                document.getElementById('bat_x3d').runtime.togglePoints(true);
            });

            // Trigger animation
            $('#btnAnimate').on('click', () => {
                if ($('#bat__BatRotate').attr('enabled') === 'false') {
                    $('#bat__BatRotate').attr('enabled', 'true');
                } else {
                    $('#bat__BatRotate').attr('enabled', 'false');
                }
            });

            x3dom.reload();
        })
    })

    $('#bvs, #bvs_').on('click', () => {
        $.ajax('http://users.sussex.ac.uk/~ak581/3dapp/assignment/index.php/bvs').then(data => {
            $('#mainContent').empty();
            $('#mainContent').html(data);

            $('#btnCameraFront').on('click', () => {
                $('#bat__Front').attr('set_bind', 'true');
            });
            $('#btnCameraBack').on('click', () => {
                $('#bat__Back').attr('set_bind', 'true');
            });
            $('#btnCameraRight').on('click', () => {
                $('#bat__Right').attr('set_bind', 'true');
            });
            $('#btnCameraLeft').on('click', () => {
                $('#bat__Left').attr('set_bind', 'true');
            });
            $('#btnCameraTop').on('click', () => {
                $('#bat__Top').attr('set_bind', 'true');
            });

            // Wireframes
            $('#btnWireframe').on('click', () => {
                document.getElementById('bat_x3d').runtime.togglePoints(true);
            });

            // Trigger animation
            $('#btnAnimate').on('click', () => {
                if ($('#bat__BatRotate').attr('enabled') === 'false') {
                    $('#bat__BatRotate').attr('enabled', 'true');
                } else {
                    $('#bat__BatRotate').attr('enabled', 'false');
                }
            });

            x3dom.reload();
        })
    })
    
    $('#home-page, #about-as-riced-out-as-a-logo-can-be').on('click', () => $(loadContents))
}

$(loadContents);