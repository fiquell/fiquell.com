interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return <main className="container">{children}</main>;
};

export default MarketingLayout;
