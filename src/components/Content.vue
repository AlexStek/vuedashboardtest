<template>
  <div class="content">
    <CompanyLogo />
    <div class="cards">
      <ContentCard title="Начать работу" pathName="getStarted">
        <img src="/images/hammer.svg" />
      </ContentCard>
      <ContentCard title="Уведомления" pathName="notifications">
        <img src="/images/message.svg" />
      </ContentCard>
      <ContentCard title="Обучение" pathName="training">
        <img src="/images/book.svg" />
      </ContentCard>
      <ContentCard title="Достижения" pathName="achievements">
        <img src="/images/medal.svg" />
      </ContentCard>
    </div>
  </div>
</template>

<script>
import ContentCard from "./ContentCard.vue";
import CompanyLogo from "./CompanyLogo.vue";

export default {
  name: "Content",
  components: {
    ContentCard,
    CompanyLogo,
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.content {
  flex-grow: 2;
  padding: 20px;
}
.cards {
  gap: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media (min-width: $small) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
  @media (min-width: $medium) {
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }
}
img {
  height: 100px;
}
</style>
