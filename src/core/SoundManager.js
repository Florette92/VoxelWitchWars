export class SoundManager {
    constructor(camera) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = 0.3; // Lower volume
        this.masterGain.connect(this.ctx.destination);

        // Wind
        this.windOsc = null;
        this.windGain = null;
        this.initWind();
    }

    initWind() {
        // Pink noise buffer for wind
        const bufferSize = 2 * this.ctx.sampleRate;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            output[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = output[i];
            output[i] *= 3.5; 
        }
        var lastOut = 0;

        this.windNode = this.ctx.createBufferSource();
        this.windNode.buffer = noiseBuffer;
        this.windNode.loop = true;
        
        // Filter to make it sound like wind
        this.windFilter = this.ctx.createBiquadFilter();
        this.windFilter.type = 'lowpass';
        this.windFilter.frequency.value = 200;

        this.windGain = this.ctx.createGain();
        this.windGain.gain.value = 0;

        this.windNode.connect(this.windFilter);
        this.windFilter.connect(this.windGain);
        this.windGain.connect(this.masterGain);
        
        this.windNode.start();
    }

    updateWind(speed) {
        if (this.ctx.state === 'suspended') this.ctx.resume();

        // Speed 0-30 range roughly
        const normalized = Math.min(speed / 30, 1);
        
        // Volume
        this.windGain.gain.setTargetAtTime(normalized * 0.5, this.ctx.currentTime, 0.1);
        
        // Pitch/Filter
        this.windFilter.frequency.setTargetAtTime(200 + (normalized * 800), this.ctx.currentTime, 0.1);
    }

    playShoot() {
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.1);

        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
    }

    playExplosion() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(100, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        
        gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        
        osc.connect(gain);
        gain.connect(this.masterGain);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
    }

    playPowerup() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.1);
        osc.frequency.exponentialRampToValueAtTime(1760, this.ctx.currentTime + 0.3);
        
        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        
        osc.connect(gain);
        gain.connect(this.masterGain);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
    }
}
