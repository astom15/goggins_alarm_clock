import { writable } from 'svelte/store';

const storedAlarmHour = localStorage.getItem("alarmHour");
export const alarmHour = writable(storedAlarmHour); 
alarmHour.subscribe(val => {
  localStorage.setItem("alarmHour", val)
});

const storedAlarmMin = localStorage.getItem("alarmMin");
export const alarmMin = writable(storedAlarmMin);
alarmMin.subscribe(val => {
  localStorage.setItem("alarmMin", val)
});

const storedStatus = localStorage.getItem("alarmStatus");
export const alarmStatus = writable(storedStatus);
alarmStatus.subscribe(val => {
  localStorage.setItem("alarmStatus", val === 'Save' ? 'Save' : 'Reset')
})

const storedGogginsTalk = localStorage.getItem("gogginsTalk");
export const gogginsTalk = writable(storedGogginsTalk);
gogginsTalk.subscribe(val => {
  localStorage.setItem("gogginsTalk", val)
})