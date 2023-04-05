import { derived, writable, type Readable, type Writable } from 'svelte/store';
import { projectDatas, type ProjectKeys } from '../projects/ProjectDatas';

export const worksActiveTab: Writable<ProjectKeys> = writable('React');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const worksActiveDatas: Readable<any> = derived(worksActiveTab, ($worksActiveTab) => [
	...projectDatas[$worksActiveTab]
]);

export function setActiveTab(str: ProjectKeys) {
	worksActiveTab.set(str);
}
