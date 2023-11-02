import { getBillboard } from '@/actions/getBillboards';
import { getProducts } from '@/actions/getProducts';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidate = 0; //prevents caching

export default async function HomePage() {
  const billboard = await getBillboard('e10bd4cc-ee52-46e8-b88b-c0972235f34f');
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  );
}
