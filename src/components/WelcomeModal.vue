<template>
        <transition v-if="this.showModal" name="modal">
            <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                <div class="modal-header">
                    <h2 class="welcome-title">Celebrating 60 years of</h2>
                    <img alt="NASA Logo" class="nasa-logo" src="../assets/nasa_logo.png">
                </div>

                <div class="modal-body">
                    <slot name="body">
                        <img class="nasa-image" alt="NASA 60th Year Logo" src="../assets/NASA_60th_LOGO_COLOR.jpg">
                        <div class="modal-paragraphs">
                            <p class="modal-text">NASA is Celebrating 60 years of the agency’s founding by Congress in 1958, and the 50th anniversary of theApollo missions. </p>
                            <p class="modal-text">Im'a need space celebrates NASA's 60 years of chaning the world by showcasing some of the most incredible pictures taken by NASA.  </p>
                            <p class="modal-text">Starting with today's date, view the last 30 days of pictures NASA has placed the honor as pictuer of the day. Scroll left to work your way through the past month of photos.  </p>
                        </div>
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                    default footer
                    <button class="modal-default-button" @click='closeModal'>
                        OK
                    </button>
                    </slot>
                </div>
                </div>
            </div>
            </div>
        </transition>
</template>

<script>
export default {
    name: 'WelcomeModal',
    methods: {
        closeModal() {
            this.showModal = !this.showModal
        }
    },
    data: function() {
        return {
            showModal: true
        }
    }
}
</script>

<style scoped>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
    }

    .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    }

    .modal-container {
    width: 600px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header {
    margin-top: 0;
    color: #42b983;
    display: flex;
    justify-content: center;
    }
    .welcome-title {
        color: #000;
    }
    .nasa-logo {
        height: 25px;
        margin-left: 10px;
    }
    .modal-body {
    margin: 20px 0;
    display: flex;
    }
    .modal-paragraphs {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly
    }
    .modal-text {
        margin-bottom: 10px;
    }
    .nasa-image {
        height: 300px;
    }
    .modal-default-button {
    float: right;
    }
</style>