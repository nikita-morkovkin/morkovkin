import type {IWorkAbility} from "./types/workAbilityInterface.ts";
import cSharp from '../../public/images/games/c-sharp.avif';
import unityEngine from '../../public/images/games/unity.avif';
import blender from '../../public/images/games/blender.avif';
import adobe from '../../public/images/games/illustrator.avif';

export const gameDevAbilitiesConfig: IWorkAbility[] = [
  {pathToImg: cSharp, titleText: 'C#'},
  {pathToImg: unityEngine, titleText: 'Unity Engine'},
  {pathToImg: blender, titleText: 'Blender 3D'},
  {pathToImg: adobe, titleText: 'Adobe Illustrator'},
]