export const goTo = (path: string) => {
  const router: any = useRouter();
  return router.push({ path: `/${path}`});
}