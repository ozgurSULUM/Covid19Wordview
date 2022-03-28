function Preloader() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        }} >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" styles="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering: auto; animation-play-state: running; animation-delay: 0s;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#82bbe4" stroke="none" styles="animation-play-state: running; animation-delay: 0s;">
                    <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51" styles="animation-play-state: running; animation-delay: 0s;"></animateTransform>
                </path>
            </svg>
        </div>
    );
}

export default Preloader;