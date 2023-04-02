import { derived, writable, type Readable, type Writable } from 'svelte/store';
import { projectDatas, type ProjectKeys, type ProjectValues } from '../projects/ProjectDatas';

export const worksActiveTab: Writable<ProjectKeys> = writable('React');
export const worksActiveDatas: Readable<ProjectValues[]> = derived(worksActiveTab, $worksActiveTab => [...projectDatas[$worksActiveTab]])

export function setActiveTab(str: ProjectKeys) {
    worksActiveTab.set(str);
};
