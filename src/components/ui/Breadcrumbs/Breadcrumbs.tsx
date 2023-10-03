import { Breadcrumbs as MUIBreadcrumbs, Typography } from '@mui/material';

type BreadcrumbsProps = {
  children: string
}

export default function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <>
      <MUIBreadcrumbs>
        {['Pages', props.children].map(page => (
          <Typography key={page} variant='subtitle1' fontWeight={500}>{page}</Typography>
        ))}
      </MUIBreadcrumbs>
    </>
  );
}
