<script>
    import { writable } from 'svelte/store';

    export let onSubmit;

    let guestType = writable('groom');
    let gender = writable('male');
    let name = '';
    let furigana = '';
    let email = '';
    let message = '';
    let images = [];
    let rsvpStatus = writable('attend');

    function handleFileChange(event) {
        images = Array.from(event.target.files);
    }

    function submitForm() {
        const newRSVP = {
            guestType: $guestType,
            gender: $gender,
            name,
            furigana,
            email,
            message,
            images,
            rsvpStatus: $rsvpStatus
        };
        onSubmit(newRSVP);
    }
</script>

<div class="rsvp-section">
    <p class="rsvp-text">
        お手数ですが　下記お日にち迄に<br>
        出欠情報のご連絡をお願い申し上げます.<br><br>
        2024年07月26日 （木）<br><br>
        期⽇までのご連絡が難しい場合には<br>
        ご一報いただけますと幸いです<br><br>
        ゲスト様入力項目<br>
        Guest Entry Form
    </p>

    <form on:submit|preventDefault={submitForm} class="rsvp-form">
        <div class="radio-group">
            <input type="radio" name="guestType" value="groom" bind:group={$guestType}> Groom's Guest
            <input type="radio" name="guestType" value="bride" bind:group={$guestType}> Bride's Guest
        </div>
        
        <div class="form-group">
            <label>Name:</label>
            <input type="text" bind:value={name} required>
        </div>

        <div class="form-group">
            <label>Name (Furigana):</label>
            <input type="text" bind:value={furigana}>
        </div>

        <div class="radio-group">
            <input type="radio" name="gender" value="male" bind:group={$gender}> Male
            <input type="radio" name="gender" value="female" bind:group={$gender}> Female
        </div>

        <div class="form-group">
            <label>Email:</label>
            <input type="email" bind:value={email} required>
        </div>

        <div class="form-group">
            <label>Message:</label>
            <textarea bind:value={message} maxlength="500"></textarea>
        </div>

        <div class="form-group">
            <label>Upload Images (up to 3):</label>
            <input type="file" accept="image/*" multiple on:change={handleFileChange} max="3">
        </div>

        <div class="radio-group">
            <input type="radio" name="rsvpStatus" value="attend" bind:group={$rsvpStatus}> Attend
            <input type="radio" name="rsvpStatus" value="decline" bind:group={$rsvpStatus}> Decline
            <input type="radio" name="rsvpStatus" value="hold" bind:group={$rsvpStatus}> Hold
        </div>

        <button type="submit">Submit</button>
    </form>
</div>

<style>
    .rsvp-section {
        text-align: center;
    }

    .rsvp-text {
        margin-bottom: 20px;
    }

    .rsvp-form {
        text-align: left;
        display: inline-block;
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 90%;
        /* max-width: 600px; */
        margin: 0 auto;
    }

    .form-group, .radio-group {
        margin-bottom: 15px;
    }

    label {
        font-weight: bold;
        color: #333;
    }

    input, textarea, button {
        width: calc(100% - 20px);
        padding: 10px;
        margin-top: 5px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    textarea {
        resize: vertical;
    }

    input[type="radio"] {
        width: auto;
        margin-right: 10px;
    }

    button {
        background-color: #E3BE54;
        color: #333;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 12px;
        font-weight: bold;
        font-size: 16px;
        width: 100%;
    }

    button:hover {
        background-color: #d3a94e;
    }
</style>
