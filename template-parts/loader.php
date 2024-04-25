<div style="
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: #ffffff;
    overflow: hidden;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
" id="loader">
    <div class="absolute top-0 right-0 img-heart" style="width: 80px; opacity: 0;">
        <img src="src/img/shoes.png" width="100%" class="max-w-full object-contain" alt="">
    </div>
    <div class="absolute bottom-0 left-0 img-heart" style="width: 80px; opacity: 0;">
        <img src="src/img/shoes.png" width="100%" class="max-w-full object-contain" alt="">
    </div>
    <div class="absolute top-[10%] left-[20%] img-heart" style="width: 80px; opacity: 0;">
        <img src="src/img/shoes.png" width="100%" class="max-w-full object-contain" alt="">
    </div>
    <div class="absolute top-[20%] right-[20%] img-heart" style="width: 80px; opacity: 0;">
        <img src="src/img/shoes.png" width="100%" class="max-w-full object-contain" alt="">
    </div>
    <div class="absolute bottom-[20%] left-[20%] img-heart" style="width: 80px; opacity: 0;">
        <img src="src/img/shoes.png" width="100%" class="max-w-full object-contain" alt="">
    </div>
    <div class="absolute bottom-[10%] right-[20%] img-heart" style="width: 80px; opacity: 0;">
        <img src="src/img/shoes.png" width="100%" class="max-w-full object-contain" alt="">
    </div>
    <div id="blockAnimationLoader" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p id="text-animation-loader" style="font-family: Quicksand, sans-serif; font-weight: 500; font-size: 1.4em; margin-top: 1rem; color:#E7858F;">Cargando...</p>
    </div>
    <div id="btnLoader" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-0">
        <button id="startBtn" type="button" class="inline-flex items-center text-center px-4 py-2 h-[50px]">
            <span style="font-family: Pinyon Script, cursive; font-weight: 700; font-size: 2.4em; color:#E7858F;">Comenzar</span>
        </button>
    </div>
</div>