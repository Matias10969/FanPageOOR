document.addEventListener("DOMContentLoaded", function() {
    // Taka
    const takaImage = document.getElementById("takaImage");
    takaImage.addEventListener("mouseover", function() {
        this.src = "assets/images/Takahiro2.png";
    });
    takaImage.addEventListener("mouseout", function() {
        this.src = "assets/images/Takahiro.png";
    });

    // Toru
    const toruImage = document.getElementById("toruImage");
    toruImage.addEventListener("mouseover", function() {
        this.src = "assets/images/Toru2.png";
    });
    toruImage.addEventListener("mouseout", function() {
        this.src = "assets/images/Toru.png";
    });

    // Ryota
    const ryotaImage = document.getElementById("ryotaImage");
    ryotaImage.addEventListener("mouseover", function() {
        this.src = "assets/images/Ryota2.png";
    });
    ryotaImage.addEventListener("mouseout", function() {
        this.src = "assets/images/Ryota.png";
    });

    // Tomoya
    const tomoImage = document.getElementById("tomoImage");
    tomoImage.addEventListener("mouseover", function() {
        this.src = "assets/images/Tomoya2.png";
    });
    tomoImage.addEventListener("mouseout", function() {
        this.src = "assets/images/Tomoya.png";
    });
});
