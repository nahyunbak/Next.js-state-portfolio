import { SetterOrUpdater } from "recoil";

export const increaseNum = (
  e: React.MouseEvent<SVGElement, MouseEvent>,
  setter: SetterOrUpdater<number>
) => {
  setter((oldState) => oldState + 1);
};
export const decreaseNum = (
  e: React.MouseEvent<SVGElement, MouseEvent>,
  setter: SetterOrUpdater<number>
) => setter((oldState) => oldState - 1);
