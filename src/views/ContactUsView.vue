<template>
    <div class="parent">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <h4 class="text-color text-initial mb-3">
                        {{ $t('message.contactInfo') }}
                    </h4>
                    <div class="contact-info mb-5">
                        <div class="box-contact d-flex align-items-center ">
                            <FontAwesomeIcon :icon="['fas', 'message']" class="icon text-color" />
                            <div class="info-text me-3   ms-3 text-initial">
                                <h5 class="title-color">{{ $t('message.mailUs') }}</h5>
                                <h5 class="text-color">dev.islamharaz@gmail.com</h5>
                                <h5 class="text-color">islamharaz64@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                    <div class="contact-info mb-5">
                        <div class="box-contact d-flex align-items-center ">
                            <FontAwesomeIcon :icon="['fas', 'phone']" class="icon text-color" />
                            <div class="info-text me-3   ms-3 text-initial">
                                <h5 class="title-color">{{ $t('message.contactUS') }}</h5>
                                <h5 class="text-color">+201274086729</h5>
                                <h5 class="text-color">+01205491530</h5>
                            </div>
                        </div>

                    </div>
                    <div class="contact-info mb-5">
                        <div class="box-contact d-flex align-items-center ">
                            <FontAwesomeIcon :icon="['fas', 'location-dot']" class="icon text-color" />
                            <div class="info-text me-3   ms-3 text-initial">
                                <h5 class="title-color">{{ $t('message.location') }}</h5>
                                <h5 class="text-color">{{$t('message.address')}}</h5>
                            </div>
                        </div>

                    </div>
                    <h4 class="text-color text-initial mb-3 ">
                        {{ $t('message.socialInfo') }}
                    </h4>
                    <div class="social-info d-flex justify-content-between   ">
                        <a href="https://www.facebook.com/profile.php?id=61550077094703">

                            <FontAwesomeIcon :icon="['fab', 'facebook']" class="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/eslam-haraz-168082288/">

                            <FontAwesomeIcon :icon="['fab', 'linkedin']" class="icon" />
                        </a>
                        <a href="wa.me/01274086729">
                            <FontAwesomeIcon :icon="['fab', 'whatsapp']" class="icon" />
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 p-3 form-box border-radius-20">
                    <div class="content mt-2 d-flex mb-3">
                        <h2 class="text-color me-2 ms-2">{{ $t('message.letIs') }}</h2>
                        <h2 class="text-color me-2 ms-2">{{ $t('message.work') }} <span class="special-color">{{
                            $t('message.togther')
                        }}</span>
                        </h2>
                    </div>
                    <form class="">
                        <div class="form-group">
                            <input type="text" class="form-control" id="Name" aria-describedby="emailHelp"
                                :placeholder="$t('message.name')">
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="Email" :placeholder="$t('message.email')">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="Subject" :placeholder="$t('message.subject')">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                :placeholder="$t('message.message')"></textarea>
                        </div>

                        <button type="submit" class="btn contact-btn text-color">{{ $t('message.sendMessage') }}</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>
<script >
export default {
    name: "ContactUsView"
}
</script>
<style scoped>
.form-box {
    background-color: var(--form-bg);
}

.icon {
    border-radius: 20px;
    background-color: var(--main-color);
    padding: 30px;
    font-size: 40px;
    color: var(--text-color);
}

input,
textarea {
    background-color: var(--input-bg);
    color: white;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 20px;
    border: 1px solid var(--border-color);
}

input::placeholder,
textarea::placeholder {
    color: var(--title-color);
}

textarea {
    height: 200px;
    resize: none;
}

.contact-btn {
    background-color: var(--main-color);
    width: 250px;
}

button.contact-btn:hover,
.icon:hover {
    background-color: var(--text-color);
    color: var(--body-color);
}
</style>