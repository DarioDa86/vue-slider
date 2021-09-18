const app = new Vue({
    el: "#root",
    data: {
        images: [
            "./img/barca-1.jpeg",
            "./img/barca-2.jpg",
            "./img/barca-3.jpg",
            "./img/barca-4.jpg",
            "./img/barca-5.jpg"
        ],
        imageIndex: 0
    },
    methods: {
        nextImage: function () {
            this.imageIndex++;

            if ( this.imageIndex >= this.images.length ) {
                this.imageIndex = 0;
            }
        },
        prevImage: function () {
            this.imageIndex--;
 
            if ( this.imageIndex == -1 ) {
                this.imageIndex = this.images.length -1;
            }
        },
        isBulletActive: function (indexBullet) {
            if ( this.imageIndex == indexBullet ) {
                return 'active';
            } 
            return '';
        },
    }
}) ;