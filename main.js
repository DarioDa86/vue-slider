const app = new Vue({
    el: "#root",
    data: {
        images: [
            "https://www.bluedolphinroma.it/wp-content/uploads/2020/06/barca-elettrica.jpg",
            "https://www.gelestatic.it/thimg/TnIKzLcaxbbtDV5v6uVzpHEi82Q=/fit-in/960x540/https%3A//www.lastampa.it/image/contentid/policy%3A1.38765328%3A1587916803/cache_12009771.jpg%3Ff%3Ddetail_558%26h%3D720%26w%3D1280%26%24p%24f%24h%24w%3Dcb41667"
        ],
        imageIndex: 0
    },
    methods: {
        nextImage: function () {
            this.imageIndex++;

            if ( this.imageIndex >= this.image.length ) {
                this.imageIndex = 0;
            }
        },
        prevImage: function () {
            this.imageIndex--;

            if ( this.imageIndex == -1 ) {
                this.imageIndex = this.image.length -1;
            }
        },
        isBulletActive: function (indexBullet) {
            if ( this.imageIndex == indexBullet ) {
                return 'active' ;
            } 
            return '';
        },
    }
}) ;