// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
	constructor() {
		this.events = {};
	}

	// Register an event handler
	on(eventName, callback) {
		if (this.events[eventName]) {
			this.events[eventName].push(callback);
		} else {
			this.events[eventName] = [callback];
		}
	}

	// Trigger all callbacks associated
	// with a given eventName
	trigger(eventName) {
		if (this.events[eventName]) {
			for (let cb of this.events[eventName]) {
				cb();
			}
		}
	}

	// Remove all event handlers associated
	// with the given eventName
	off(eventName) {
		delete this.events[eventName];
	}
}

module.exports = Events;

class EventEmitter {
	listeners = {};

	addListener(eventName, fn) {
		this.listeners[eventName] = this.listeners[eventName] || [];
		this.listeners[eventName].push(fn);
		return this;
	}

	on(eventName, fn) {
		return this.addListener(eventName, fn);
	}

	once(eventName, fn) {
		this.listeners[eventName] = this.listeners[eventName] || [];
		const onceWrapper = () => {
			fn();
			this.off(eventName, onceWrapper);
		};
		this.listeners[eventName].push(onceWrapper);
		return this;
	}

	off(eventName, fn) {
		return this.removeListener(eventName, fn);
	}

	removeListener(eventName, fn) {
		let lis = this.listeners[eventName];
		if (!lis) return this;
		for (let i = lis.length; i > 0; i--) {
			if (lis[i] === fn) {
				lis.splice(i, 1);
				break;
			}
		}
		return this;
	}

	emit(eventName, ...args) {
		let fns = this.listeners[eventName];
		if (!fns) return false;
		fns.forEach((f) => {
			f(...args);
		});
		return true;
	}

	listenerCount(eventName) {
		let fns = this.listeners[eventName] || [];
		return fns.length;
	}

	rawListeners(eventName) {
		return this.listeners[eventName];
	}
}
