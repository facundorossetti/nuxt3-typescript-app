export const goTo = (path: string): void => {
  const router: any = useRouter();
  return router.push({ path: `/${path}`});
}